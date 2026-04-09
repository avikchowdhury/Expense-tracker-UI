using ExpenseTracker.Api.Data;
using ExpenseTracker.Api.Extensions;
using ExpenseTracker.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace ExpenseTracker.Api.Services
{
    public class ReceiptService : IReceiptService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly FileStoragePaths _storagePaths;
        private readonly IAIService _aiService;

        public ReceiptService(IUnitOfWork unitOfWork, FileStoragePaths storagePaths, IAIService aiService)
        {
            _unitOfWork = unitOfWork;
            _storagePaths = storagePaths;
            _aiService = aiService;
        }

        public async Task<Receipt> StoreReceiptAsync(int userId, IFormFile file, CancellationToken cancellationToken = default)
        {
            var receipt = new Receipt
            {
                UserId = userId,
                FileName = file.FileName,
                UploadedAt = DateTime.UtcNow,
                Category = "Uncategorized",
                TotalAmount = 0M,
                ParsedContentJson = "{}"
            };

            Directory.CreateDirectory(_storagePaths.ReceiptsPath);

            var filePath = Path.Combine(_storagePaths.ReceiptsPath, $"{Guid.NewGuid()}_{file.FileName}");
            await using (var stream = File.Create(filePath))
            {
                await file.CopyToAsync(stream, cancellationToken);
                await stream.FlushAsync(cancellationToken);
            }

            receipt.BlobUrl = filePath;

            var parsed = await _aiService.ParseReceiptAsync(file);
            receipt.ParsedContentJson = System.Text.Json.JsonSerializer.Serialize(new
            {
                Vendor = parsed.Vendor,
                TotalAmount = parsed.Amount,
                Amount = parsed.Amount,
                Category = parsed.Category,
                Date = parsed.Date,
                RawText = parsed.RawText,
                Confidence = parsed.Confidence,
                NeedsReview = parsed.NeedsReview,
                Summary = parsed.Summary,
                PaymentMethod = parsed.PaymentMethod,
                Subtotal = parsed.Subtotal,
                Tax = parsed.Tax,
                Items = parsed.Items,
                PossibleDuplicates = parsed.PossibleDuplicates,
                SuggestedVendorRules = parsed.SuggestedVendorRules
            });

            var parsedData = ParsingHelpers.ParseParsedReceipt(receipt.ParsedContentJson);
            if (parsedData.TotalAmount.HasValue) receipt.TotalAmount = parsedData.TotalAmount.Value;
            if (!string.IsNullOrEmpty(parsedData.Vendor)) receipt.Vendor = parsedData.Vendor;
            if (!string.IsNullOrEmpty(parsedData.Category)) receipt.Category = parsedData.Category;

            await ApplyVendorRuleAsync(receipt, cancellationToken);

            await _unitOfWork.Receipts.AddAsync(receipt, cancellationToken);
            await _unitOfWork.SaveChangesAsync(cancellationToken);

            await SyncExpenseFromReceiptAsync(receipt, cancellationToken);

            return receipt;
        }

        public async Task<Receipt?> GetReceiptByIdAsync(int userId, int receiptId)
        {
            return await _unitOfWork.Receipts.Query()
                .FirstOrDefaultAsync(x => x.Id == receiptId && x.UserId == userId);
        }

        public async Task<IEnumerable<Receipt>> GetReceiptsForUserAsync(int userId)
        {
            return await _unitOfWork.Receipts.Query()
                .Where(x => x.UserId == userId)
                .OrderByDescending(x => x.UploadedAt)
                .ToListAsync();
        }

        public async Task<Receipt?> UpdateReceiptAsync(int userId, int receiptId, string? category, string? parsedContentJson, CancellationToken cancellationToken = default)
        {
            var receipt = await GetReceiptByIdAsync(userId, receiptId);
            if (receipt == null)
            {
                return null;
            }

            receipt.Category = category;
            receipt.ParsedContentJson = parsedContentJson;

            await ApplyVendorRuleAsync(receipt, cancellationToken);

            _unitOfWork.Receipts.Update(receipt);
            await _unitOfWork.SaveChangesAsync(cancellationToken);
            await SyncExpenseFromReceiptAsync(receipt, cancellationToken);

            return receipt;
        }

        public async Task<bool> DeleteReceiptAsync(int userId, int receiptId, CancellationToken cancellationToken = default)
        {
            var receipt = await GetReceiptByIdAsync(userId, receiptId);
            if (receipt == null)
            {
                return false;
            }

            var linkedExpenses = await _unitOfWork.Expenses.Query()
                .Where(x => x.UserId == userId && x.ReceiptId == receiptId)
                .ToListAsync(cancellationToken);

            if (linkedExpenses.Count > 0)
            {
                _unitOfWork.Expenses.RemoveRange(linkedExpenses);
            }

            _unitOfWork.Receipts.Remove(receipt);
            await _unitOfWork.SaveChangesAsync(cancellationToken);

            return true;
        }

        private async Task SyncExpenseFromReceiptAsync(Receipt receipt, CancellationToken cancellationToken)
        {
            var expense = await _unitOfWork.Expenses.Query()
                .FirstOrDefaultAsync(x => x.UserId == receipt.UserId && x.ReceiptId == receipt.Id, cancellationToken);

            var category = await ResolveCategoryAsync(receipt.UserId, receipt.Category, cancellationToken);

            if (expense == null)
            {
                expense = new Expense
                {
                    UserId = receipt.UserId,
                    ReceiptId = receipt.Id
                };
                await _unitOfWork.Expenses.AddAsync(expense, cancellationToken);
            }

            expense.Date = receipt.UploadedAt;
            expense.Amount = receipt.TotalAmount;
            expense.CategoryId = category?.Id;
            expense.Description = !string.IsNullOrWhiteSpace(receipt.Vendor) ? receipt.Vendor : receipt.FileName;
            expense.Currency = "USD";

            await _unitOfWork.SaveChangesAsync(cancellationToken);
        }

        private async Task ApplyVendorRuleAsync(Receipt receipt, CancellationToken cancellationToken)
        {
            if (string.IsNullOrWhiteSpace(receipt.Vendor))
            {
                return;
            }

            var normalizedVendor = receipt.Vendor.Trim().ToLowerInvariant();
            var matchingRule = await _unitOfWork.VendorCategoryRules.Query()
                .Include(rule => rule.Category)
                .Where(rule => rule.UserId == receipt.UserId && rule.IsActive)
                .OrderByDescending(rule => rule.VendorPattern.Length)
                .FirstOrDefaultAsync(
                    rule => normalizedVendor.Contains(rule.VendorPattern.ToLower()),
                    cancellationToken);

            if (matchingRule?.Category != null)
            {
                receipt.Category = matchingRule.Category.Name;
            }
        }

        private async Task<Category?> ResolveCategoryAsync(int userId, string? categoryName, CancellationToken cancellationToken)
        {
            if (string.IsNullOrWhiteSpace(categoryName) || categoryName.Equals("Uncategorized", StringComparison.OrdinalIgnoreCase))
            {
                return null;
            }

            var normalized = categoryName.Trim();
            var category = await _unitOfWork.Categories.Query()
                .FirstOrDefaultAsync(x => x.UserId == userId && x.Name == normalized, cancellationToken);

            if (category != null)
            {
                return category;
            }

            category = new Category
            {
                UserId = userId,
                Name = normalized
            };

            await _unitOfWork.Categories.AddAsync(category, cancellationToken);
            await _unitOfWork.SaveChangesAsync(cancellationToken);

            return category;
        }
    }
}
