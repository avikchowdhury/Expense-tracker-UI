using ExpenseTracker.Api.Dtos;
using ExpenseTracker.Api.Models;
using System.Globalization;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService
    {
        private static SearchResponseContext BuildSearchResponse(
            string message,
            IReadOnlyCollection<Receipt> receipts,
            IReadOnlyCollection<Category> categories)
        {
            var lowerMessage = message.Trim().ToLowerInvariant();
            var hasSearchIntent = ContainsAny(lowerMessage, "how much", "show", "find", "list", "what did i spend", "spent", "receipts", "above", "below", "under", "over");
            if (!hasSearchIntent)
            {
                return SearchResponseContext.Empty;
            }

            IEnumerable<Receipt> filtered = receipts;
            var appliedFilters = new List<string>();
            var referencedMetrics = new List<string> { "Receipt search" };

            var dateWindow = ResolveDateWindow(lowerMessage);
            if (dateWindow != null)
            {
                filtered = filtered.Where(receipt => receipt.UploadedAt >= dateWindow.Start && receipt.UploadedAt < dateWindow.End);
                appliedFilters.Add(dateWindow.Label);
            }

            var matchedCategory = categories
                .Select(category => category.Name)
                .Concat(receipts.Where(receipt => !string.IsNullOrWhiteSpace(receipt.Category)).Select(receipt => receipt.Category!))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .Select(category => new
                {
                    Name = category,
                    Score = GetMatchScore(lowerMessage, category)
                })
                .Where(item => item.Score > 0)
                .OrderByDescending(item => item.Score)
                .ThenByDescending(item => item.Name.Length)
                .FirstOrDefault();

            if (matchedCategory != null)
            {
                filtered = filtered.Where(receipt => !string.IsNullOrWhiteSpace(receipt.Category) &&
                                                     receipt.Category.Equals(matchedCategory.Name, StringComparison.OrdinalIgnoreCase));
                appliedFilters.Add(matchedCategory.Name);
                referencedMetrics.Add("Category filter");
            }

            var matchedVendor = receipts
                .Where(receipt => !string.IsNullOrWhiteSpace(receipt.Vendor))
                .Select(receipt => receipt.Vendor!)
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .Select(vendor => new
                {
                    Name = vendor,
                    Score = GetMatchScore(lowerMessage, vendor)
                })
                .Where(item => item.Score > 0)
                .OrderByDescending(item => item.Score)
                .ThenByDescending(item => item.Name.Length)
                .FirstOrDefault();

            if (matchedVendor != null)
            {
                filtered = filtered.Where(receipt => !string.IsNullOrWhiteSpace(receipt.Vendor) &&
                                                     receipt.Vendor!.Contains(matchedVendor.Name, StringComparison.OrdinalIgnoreCase));
                appliedFilters.Add(matchedVendor.Name);
                referencedMetrics.Add("Vendor filter");
            }

            var thresholdMatch = AmountThresholdRegex.Match(lowerMessage);
            if (thresholdMatch.Success &&
                decimal.TryParse(
                    thresholdMatch.Groups["amount"].Value.Replace(',', '.'),
                    NumberStyles.Number,
                    CultureInfo.InvariantCulture,
                    out var threshold))
            {
                if (ContainsAny(lowerMessage, "above", "over", "greater than", "more than"))
                {
                    filtered = filtered.Where(receipt => receipt.TotalAmount >= threshold);
                    appliedFilters.Add($">{threshold:C0}");
                }
                else
                {
                    filtered = filtered.Where(receipt => receipt.TotalAmount <= threshold);
                    appliedFilters.Add($"<{threshold:C0}");
                }

                referencedMetrics.Add("Amount filter");
            }

            var results = filtered
                .OrderByDescending(receipt => receipt.UploadedAt)
                .Take(5)
                .Select(receipt => new AiReceiptSearchResultDto
                {
                    ReceiptId = receipt.Id,
                    FileName = receipt.FileName,
                    Vendor = receipt.Vendor ?? "Unknown vendor",
                    Category = receipt.Category ?? "Uncategorized",
                    Amount = RoundCurrency(receipt.TotalAmount),
                    UploadedAt = receipt.UploadedAt,
                    MatchReason = appliedFilters.Count == 0
                        ? "Matched your receipt search."
                        : $"Matched filters: {string.Join(", ", appliedFilters)}."
                })
                .ToList();

            if (results.Count == 0 || appliedFilters.Count == 0)
            {
                return SearchResponseContext.Empty;
            }

            var matchedTotal = RoundCurrency(filtered.Take(200).Sum(receipt => receipt.TotalAmount));
            return new SearchResponseContext(
                $"I found {results.Count} recent receipt match{(results.Count == 1 ? string.Empty : "es")} for {string.Join(", ", appliedFilters)} totaling {matchedTotal:C}.",
                results,
                referencedMetrics);
        }

        private static CategoryDriftResult? FindLargestCategoryIncrease(IReadOnlyCollection<Receipt> receipts)
        {
            var now = DateTime.UtcNow;
            var monthStart = new DateTime(now.Year, now.Month, 1);
            var previousMonthStart = monthStart.AddMonths(-1);

            var current = receipts
                .Where(receipt => receipt.UploadedAt >= monthStart && !string.IsNullOrWhiteSpace(receipt.Category))
                .GroupBy(receipt => receipt.Category!, StringComparer.OrdinalIgnoreCase)
                .ToDictionary(group => group.Key, group => RoundCurrency(group.Sum(item => item.TotalAmount)), StringComparer.OrdinalIgnoreCase);

            var previous = receipts
                .Where(receipt => receipt.UploadedAt >= previousMonthStart && receipt.UploadedAt < monthStart && !string.IsNullOrWhiteSpace(receipt.Category))
                .GroupBy(receipt => receipt.Category!, StringComparer.OrdinalIgnoreCase)
                .ToDictionary(group => group.Key, group => RoundCurrency(group.Sum(item => item.TotalAmount)), StringComparer.OrdinalIgnoreCase);

            var result = current
                .Select(item =>
                {
                    previous.TryGetValue(item.Key, out var previousSpend);
                    return new CategoryDriftResult(item.Key, previousSpend, item.Value);
                })
                .OrderByDescending(item => item.Delta)
                .FirstOrDefault();

            return result?.Delta > 0m ? result : null;
        }

        private static List<AiAssistantActionDto> BuildAssistantActions(
            string message,
            AiInsightSnapshotDto snapshot,
            IReadOnlyCollection<Category> categories,
            IReadOnlyCollection<Receipt> receipts)
        {
            var lowerMessage = message.Trim().ToLowerInvariant();
            var actions = new List<AiAssistantActionDto>();

            var categoryMatch = CreateCategoryRegex.Match(message);
            if (categoryMatch.Success)
            {
                var categoryName = categoryMatch.Groups["name"].Value.Trim();
                if (!string.IsNullOrWhiteSpace(categoryName))
                {
                    actions.Add(new AiAssistantActionDto
                    {
                        Type = "create-category",
                        Label = $"Create category {categoryName}",
                        Description = "Adds a reusable category to your tracker.",
                        CategoryName = categoryName
                    });
                }
            }

            var budgetMatch = CreateBudgetRegex.Match(message);
            if (budgetMatch.Success &&
                decimal.TryParse(
                    budgetMatch.Groups["amount"].Value.Replace(',', '.'),
                    NumberStyles.Number,
                    CultureInfo.InvariantCulture,
                    out var amount))
            {
                var rawCategory = budgetMatch.Groups["category"].Value.Trim();
                var matchedCategory = categories.FirstOrDefault(category =>
                    category.Name.Equals(rawCategory, StringComparison.OrdinalIgnoreCase));
                if (matchedCategory != null)
                {
                    actions.Add(new AiAssistantActionDto
                    {
                        Type = "create-budget",
                        Label = $"Create {matchedCategory.Name} budget",
                        Description = $"Adds a {amount:C} monthly budget for {matchedCategory.Name}.",
                        CategoryName = matchedCategory.Name,
                        CategoryId = matchedCategory.Id,
                        Amount = RoundCurrency(amount),
                        Period = DateTime.UtcNow.ToString("yyyy-MM", CultureInfo.InvariantCulture)
                    });
                }
            }

            if (ContainsAny(lowerMessage, "vendor rule", "create rule", "apply rule", "always categorize", "always tag"))
            {
                actions.AddRange(snapshot.VendorRuleSuggestions.Take(2).Select(suggestion => new AiAssistantActionDto
                {
                    Type = "apply-vendor-rule",
                    Label = $"Apply {suggestion.VendorLabel} rule",
                    Description = $"Future {suggestion.VendorLabel} uploads will default to {suggestion.CategoryName}.",
                    CategoryId = suggestion.CategoryId,
                    CategoryName = suggestion.CategoryName,
                    VendorPattern = suggestion.VendorPattern
                }));
            }

            if (ContainsAny(lowerMessage, "tag uncategorized", "categorize uncategorized", "fix uncategorized"))
            {
                var targetCategory = categories.FirstOrDefault(category =>
                    lowerMessage.Contains(category.Name.ToLowerInvariant(), StringComparison.OrdinalIgnoreCase));
                var uncategorizedReceipt = receipts.FirstOrDefault(receipt =>
                    string.IsNullOrWhiteSpace(receipt.Category) ||
                    receipt.Category.Equals("Uncategorized", StringComparison.OrdinalIgnoreCase));

                if (targetCategory != null && uncategorizedReceipt != null)
                {
                    actions.Add(new AiAssistantActionDto
                    {
                        Type = "recategorize-receipt",
                        Label = $"Tag {uncategorizedReceipt.FileName}",
                        Description = $"Apply {targetCategory.Name} to the next uncategorized receipt.",
                        CategoryId = targetCategory.Id,
                        CategoryName = targetCategory.Name,
                        ReceiptId = uncategorizedReceipt.Id,
                        ReceiptLabel = uncategorizedReceipt.FileName
                    });
                }
            }

            return actions
                .GroupBy(action => $"{action.Type}|{action.Label}", StringComparer.OrdinalIgnoreCase)
                .Select(group => group.First())
                .Take(3)
                .ToList();
        }
    }
}
