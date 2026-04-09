using ExpenseTracker.Api.Data;
using ExpenseTracker.Api.Dtos;
using ExpenseTracker.Api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Globalization;
using System.Security.Claims;
using System.Text;
using System.Text.RegularExpressions;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService : IAIService
    {
        private static readonly string[] CommonCategories =
        {
            "Groceries",
            "Dining",
            "Travel",
            "Housing",
            "Subscriptions",
            "Health",
            "Utilities",
            "Shopping",
            "Entertainment",
            "Education"
        };

        private static readonly Regex AmountThresholdRegex =
            new(@"(?:above|over|greater than|more than|below|under|less than)\s*\$?(?<amount>\d+(?:[.,]\d{1,2})?)",
                RegexOptions.Compiled | RegexOptions.IgnoreCase);

        private static readonly Regex TaxRegex =
            new(@"tax\D{0,20}(?<amount>\d+[.,]\d{2})", RegexOptions.Compiled | RegexOptions.IgnoreCase);

        private static readonly Regex CreateCategoryRegex =
            new(@"(?:create|add)\s+category\s+(?<name>[a-zA-Z][a-zA-Z\s\-]{1,30})", RegexOptions.Compiled | RegexOptions.IgnoreCase);

        private static readonly Regex CreateBudgetRegex =
            new(@"(?:create|add|set)\s+(?:a\s+)?budget(?:\s+for)?\s+(?<category>[a-zA-Z][a-zA-Z\s\-]{1,30})?.*?(?<amount>\d+(?:[.,]\d{1,2})?)",
                RegexOptions.Compiled | RegexOptions.IgnoreCase);

        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBudgetHealthService _budgetHealthService;
        private readonly IBudgetAdvisorService _budgetAdvisorService;
        private readonly ILogger<AdvancedAIService> _logger;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AdvancedAIService(
            HttpClient httpClient,
            IConfiguration configuration,
            IUnitOfWork unitOfWork,
            IBudgetHealthService budgetHealthService,
            IBudgetAdvisorService budgetAdvisorService,
            ILogger<AdvancedAIService> logger,
            IHttpContextAccessor httpContextAccessor)
        {
            _httpClient = httpClient;
            _configuration = configuration;
            _unitOfWork = unitOfWork;
            _budgetHealthService = budgetHealthService;
            _budgetAdvisorService = budgetAdvisorService;
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<ReceiptParseResult> ParseReceiptAsync(IFormFile file)
        {
            await using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            var fileBytes = memoryStream.ToArray();

            var fallback = ReceiptFallbackHelper.Parse(file.FileName, fileBytes);
            var userId = ResolveCurrentUserId();
            var categories = userId.HasValue
                ? await _unitOfWork.Categories.Query().Where(category => category.UserId == userId.Value).ToListAsync()
                : new List<Category>();
            var rules = userId.HasValue
                ? await _unitOfWork.VendorCategoryRules.Query()
                    .Where(rule => rule.UserId == userId.Value && rule.IsActive)
                    .Include(rule => rule.Category)
                    .ToListAsync()
                : new List<VendorCategoryRule>();
            var previousReceipts = userId.HasValue
                ? await _unitOfWork.Receipts.Query()
                    .Where(receipt => receipt.UserId == userId.Value)
                    .OrderByDescending(receipt => receipt.UploadedAt)
                    .Take(80)
                    .ToListAsync()
                : new List<Receipt>();

            var modelExtraction = await TryEnhanceReceiptParseAsync(
                file.FileName,
                fallback,
                categories.Select(category => category.Name).Concat(CommonCategories).Distinct(StringComparer.OrdinalIgnoreCase).ToList());

            var vendor = FirstNonEmpty(modelExtraction?.Vendor, fallback.Vendor, "Receipt Upload");
            var amount = modelExtraction?.Amount is > 0m ? modelExtraction.Amount.Value : fallback.Amount;
            var categorySuggestion = SuggestCategory(vendor, fallback.RawText, categories, rules, previousReceipts, fallback.Category, modelExtraction?.Category);
            var category = NormalizeCategoryChoice(modelExtraction?.Category, categorySuggestion.Category, fallback.Category);
            var duplicates = BuildDuplicateCandidates(previousReceipts, vendor, amount, file.FileName);
            var paymentMethod = FirstNonEmpty(modelExtraction?.PaymentMethod, InferPaymentMethod(fallback.RawText), "Unknown");
            var tax = modelExtraction?.Tax ?? ExtractTax(fallback.RawText);
            var subtotal = modelExtraction?.Subtotal ?? (tax.HasValue && amount > 0m ? Math.Max(amount - tax.Value, 0m) : null);
            var items = modelExtraction?.Items?.Where(item => !string.IsNullOrWhiteSpace(item.Name)).ToList()
                ?? fallback.Items.Select(item => new ReceiptParseLineItem
                {
                    Name = item.Name,
                    Price = item.Price
                }).ToList();
            var confidence = Math.Max(modelExtraction?.Confidence ?? 0m, categorySuggestion.Confidence);
            if (confidence <= 0m)
            {
                confidence = string.Equals(category, "Uncategorized", StringComparison.OrdinalIgnoreCase) ? 0.42m : 0.74m;
            }

            var syntheticReceipts = previousReceipts
                .Concat(new[]
                {
                    new Receipt
                    {
                        UserId = userId ?? 0,
                        Vendor = vendor,
                        Category = category,
                        TotalAmount = amount,
                        FileName = file.FileName,
                        UploadedAt = DateTime.UtcNow
                    }
                })
                .ToList();

            var suggestedVendorRules = BuildVendorRuleSuggestions(syntheticReceipts, categories, rules)
                .Where(suggestion => suggestion.VendorLabel.Equals(vendor, StringComparison.OrdinalIgnoreCase))
                .Take(2)
                .ToList();

            return new ReceiptParseResult
            {
                Vendor = vendor,
                Amount = RoundCurrency(amount),
                Category = category,
                Date = FirstNonEmpty(modelExtraction?.Date, fallback.Date, DateTime.UtcNow.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture)),
                RawText = fallback.RawText,
                Confidence = Math.Round(confidence, 2, MidpointRounding.AwayFromZero),
                NeedsReview = confidence < 0.72m || duplicates.Count > 0 || amount <= 0m,
                Summary = FirstNonEmpty(
                    modelExtraction?.Summary,
                    BuildReceiptSummary(vendor, amount, category, confidence, duplicates.Count),
                    "Receipt parsed from filename and extracted text."),
                PaymentMethod = paymentMethod,
                Subtotal = subtotal.HasValue ? RoundCurrency(subtotal.Value) : null,
                Tax = tax.HasValue ? RoundCurrency(tax.Value) : null,
                Items = items,
                PossibleDuplicates = duplicates,
                SuggestedVendorRules = suggestedVendorRules
            };
        }

        public async Task<AiInsightSnapshotDto> GetInsightsAsync(int userId)
        {
            var now = DateTime.UtcNow;
            var monthStart = new DateTime(now.Year, now.Month, 1);
            var previousMonthStart = monthStart.AddMonths(-1);

            var receipts = await _unitOfWork.Receipts.Query()
                .Where(receipt => receipt.UserId == userId)
                .OrderByDescending(receipt => receipt.UploadedAt)
                .ToListAsync();
            var budgets = await _unitOfWork.Budgets.Query()
                .Where(budget => budget.UserId == userId)
                .OrderByDescending(budget => budget.LastReset)
                .ToListAsync();
            var categories = await _unitOfWork.Categories.Query()
                .Where(category => category.UserId == userId)
                .ToListAsync();
            var rules = await _unitOfWork.VendorCategoryRules.Query()
                .Where(rule => rule.UserId == userId && rule.IsActive)
                .Include(rule => rule.Category)
                .ToListAsync();

            var monthReceipts = receipts
                .Where(receipt => receipt.UploadedAt >= monthStart && receipt.UploadedAt < monthStart.AddMonths(1))
                .ToList();
            var previousMonthReceipts = receipts
                .Where(receipt => receipt.UploadedAt >= previousMonthStart && receipt.UploadedAt < monthStart)
                .ToList();
            var recentReceipts = receipts.Where(receipt => receipt.UploadedAt >= now.AddMonths(-3)).ToList();
            var monthSpend = RoundCurrency(monthReceipts.Sum(receipt => receipt.TotalAmount));
            var groupedRecentMonths = recentReceipts
                .GroupBy(receipt => new { receipt.UploadedAt.Year, receipt.UploadedAt.Month })
                .Select(group => RoundCurrency(group.Sum(item => item.TotalAmount)))
                .ToList();
            var recentAverage = groupedRecentMonths.Count > 0 ? RoundCurrency(groupedRecentMonths.Average()) : 0m;
            var topCategory = monthReceipts
                .Where(receipt => !string.IsNullOrWhiteSpace(receipt.Category))
                .GroupBy(receipt => receipt.Category!, StringComparer.OrdinalIgnoreCase)
                .OrderByDescending(group => group.Sum(item => item.TotalAmount))
                .Select(group => group.Key)
                .FirstOrDefault() ?? "N/A";

            var budgetSnapshot = await _budgetHealthService.GetBudgetHealthAsync(userId, monthStart, monthStart.AddMonths(1));
            var budgetAdvisor = await _budgetAdvisorService.GetBudgetAdvisorAsync(userId, now);
            var subscriptions = DetectSubscriptions(receipts);
            var vendorRuleSuggestions = BuildVendorRuleSuggestions(receipts, categories, rules);
            var forecast = BuildForecast(budgetAdvisor, now);
            var duplicateAlerts = BuildDuplicateAlerts(receipts);
            var categorySpikeAlerts = BuildCategorySpikeAlerts(receipts, monthStart);
            var uncategorizedCount = monthReceipts.Count(receipt =>
                string.IsNullOrWhiteSpace(receipt.Category) ||
                receipt.Category.Equals("Uncategorized", StringComparison.OrdinalIgnoreCase));

            var alerts = BuildAlerts(budgetAdvisor, subscriptions, uncategorizedCount, receipts)
                .Concat(duplicateAlerts)
                .Concat(categorySpikeAlerts)
                .GroupBy(alert => $"{alert.Title}|{alert.Detail}", StringComparer.OrdinalIgnoreCase)
                .Select(group => group.First())
                .OrderByDescending(alert => GetSeverityRank(alert.Severity))
                .ThenBy(alert => alert.Title)
                .Take(6)
                .ToList();

            var budgetHealth = budgetSnapshot.BudgetCount == 0
                ? "No active budget"
                : budgetAdvisor.PaceStatus switch
                {
                    "critical" => "Over budget pace",
                    "warning" => "Budget under pressure",
                    _ => "Healthy budget pace"
                };

            return new AiInsightSnapshotDto
            {
                GeneratedAt = now,
                BudgetHealth = budgetHealth,
                EvidenceSummary = $"Grounded in {receipts.Count} receipts, {budgets.Count} budgets, {categories.Count} categories, and {rules.Count} vendor rules.",
                MonthSpend = monthSpend,
                RecentAverage = recentAverage,
                TopCategory = topCategory,
                Anomalies = alerts
                    .Where(alert => alert.Severity == "warning" || alert.Severity == "critical")
                    .Select(alert => alert.Detail)
                    .Distinct(StringComparer.OrdinalIgnoreCase)
                    .Take(5)
                    .ToList(),
                Suggestions = BuildSuggestions(budgetAdvisor, forecast, vendorRuleSuggestions, duplicateAlerts),
                Insights = BuildInsights(
                    budgetSnapshot,
                    budgetAdvisor,
                    subscriptions,
                    vendorRuleSuggestions,
                    topCategory,
                    monthSpend,
                    recentAverage,
                    monthReceipts,
                    forecast),
                Alerts = alerts,
                Subscriptions = subscriptions,
                Forecast = forecast,
                VendorRuleSuggestions = vendorRuleSuggestions,
                CoachTips = BuildCoachTips(forecast, vendorRuleSuggestions, subscriptions, duplicateAlerts, receipts.Count),
                Summaries = BuildMonthlySummaries(monthReceipts, previousMonthReceipts, subscriptions, topCategory, now)
            };
        }

        public async Task<List<AiSubscriptionInsightDto>> GetSubscriptionsAsync(int userId)
        {
            var receipts = await _unitOfWork.Receipts.Query()
                .Where(receipt => receipt.UserId == userId && receipt.UploadedAt >= DateTime.UtcNow.AddMonths(-6))
                .OrderByDescending(receipt => receipt.UploadedAt)
                .ToListAsync();

            return DetectSubscriptions(receipts);
        }

        public async Task<AiChatResponseDto> ChatAsync(int userId, string message)
        {
            var snapshot = await GetInsightsAsync(userId);
            var receipts = await _unitOfWork.Receipts.Query()
                .Where(receipt => receipt.UserId == userId)
                .OrderByDescending(receipt => receipt.UploadedAt)
                .Take(120)
                .ToListAsync();
            var categories = await _unitOfWork.Categories.Query()
                .Where(category => category.UserId == userId)
                .ToListAsync();

            var lowerMessage = message.Trim().ToLowerInvariant();
            var referencedMetrics = new List<string>();
            var cards = new List<AiCopilotCardDto>();
            var alerts = snapshot.Alerts.Take(3).ToList();
            var searchResults = new List<AiReceiptSearchResultDto>();
            string reply;

            if ((lowerMessage.Contains("increase") || lowerMessage.Contains("grew") || lowerMessage.Contains("changed")) &&
                lowerMessage.Contains("category"))
            {
                referencedMetrics.Add("Category drift");
                var drift = FindLargestCategoryIncrease(receipts);
                if (drift == null)
                {
                    reply = "I need at least two months of categorized receipt history before I can name the category that increased the most.";
                }
                else
                {
                    reply = $"{drift.Category} increased the most, up {drift.Delta:C} from last month. It moved from {drift.PreviousSpend:C} to {drift.CurrentSpend:C}.";
                    cards = BuildDriftCards(drift);
                }
            }
            else
            {
                var searchContext = BuildSearchResponse(message, receipts, categories);
                searchResults = searchContext.Results;

                if (searchResults.Count > 0)
                {
                    referencedMetrics.AddRange(searchContext.ReferencedMetrics);
                    reply = searchContext.Reply;
                    cards = BuildSearchCards(searchResults);
                }
                else if (lowerMessage.Contains("subscription") || lowerMessage.Contains("recurring") || lowerMessage.Contains("cancel"))
                {
                    referencedMetrics.Add("Recurring spend");
                    referencedMetrics.Add("Next due vendors");
                    reply = snapshot.Subscriptions.Count == 0
                        ? "I do not see strong recurring subscription patterns yet. Upload a few more monthly receipts from the same vendors and I will start flagging likely subscriptions."
                        : $"{snapshot.Subscriptions.Count} recurring spend signals stand out. {snapshot.Subscriptions[0].Recommendation}";
                    cards = BuildSubscriptionCards(snapshot);
                }
                else if (lowerMessage.Contains("budget") || lowerMessage.Contains("overspend") || lowerMessage.Contains("limit") || lowerMessage.Contains("forecast"))
                {
                    referencedMetrics.Add("Budget health");
                    referencedMetrics.Add("Projected spend");
                    reply = snapshot.Forecast == null
                        ? "You do not have enough budget data yet for forecasting. Create a budget and keep uploading receipts so I can project the month-end pace."
                        : $"Projected month-end spend is {snapshot.Forecast.ProjectedSpend:C}. The biggest pressure is {snapshot.Forecast.LeadingRiskCategory}, and {snapshot.Forecast.CutSuggestion}";
                    cards = BuildBudgetCards(snapshot);
                }
                else if (lowerMessage.Contains("category") || lowerMessage.Contains("spend most"))
                {
                    referencedMetrics.Add("Top category");
                    reply = snapshot.TopCategory == "N/A"
                        ? "I do not have enough categorized receipts yet to name a dominant category. Upload a few more receipts or correct categories in the receipts page."
                        : $"{snapshot.TopCategory} is your strongest spending signal right now. Review that category first if you want the fastest impact on this month's total.";
                    cards = BuildCategoryCards(snapshot);
                }
                else if (lowerMessage.Contains("alert") || lowerMessage.Contains("risk") || lowerMessage.Contains("anomaly") || lowerMessage.Contains("fraud"))
                {
                    referencedMetrics.Add("Active alerts");
                    reply = alerts.Count == 0
                        ? "No major alert is active right now. Your tracker looks relatively stable from the latest receipts and budgets."
                        : $"{alerts[0].Title}: {alerts[0].Detail}";
                    cards = BuildAlertCards(snapshot);
                }
                else if (lowerMessage.Contains("receipt") || lowerMessage.Contains("vendor") || lowerMessage.Contains("merchant"))
                {
                    referencedMetrics.Add("Recent uploads");
                    reply = snapshot.Insights.FirstOrDefault(insight => insight.Title == "Receipt activity")?.Summary
                        ?? "I do not have recent receipt activity to summarize yet.";
                    cards = BuildReceiptCards(snapshot);
                }
                else
                {
                    referencedMetrics.Add("Budget health");
                    referencedMetrics.Add("Top category");
                    referencedMetrics.Add("Recurring spend");
                    reply = $"Here is the current picture: {snapshot.BudgetHealth}, month spend is {snapshot.MonthSpend:C}, and {snapshot.TopCategory} is the leading category. Start with: {snapshot.Suggestions.FirstOrDefault() ?? "upload more receipts for a stronger signal."}";
                    cards = BuildGeneralCards(snapshot);
                }
            }

            var actions = BuildAssistantActions(message, snapshot, categories, receipts);
            if (actions.Count > 0)
            {
                reply = $"{reply} I also prepared a safe action below if you want to apply it in one click.";
            }

            reply = await TryGenerateModelReplyAsync(message, snapshot, reply, searchResults, actions);

            return new AiChatResponseDto
            {
                Reply = reply,
                EvidenceSummary = snapshot.EvidenceSummary,
                Suggestions = snapshot.Suggestions.Take(3).ToList(),
                ReferencedMetrics = referencedMetrics.Distinct(StringComparer.OrdinalIgnoreCase).ToList(),
                Cards = cards,
                Alerts = alerts,
                SearchResults = searchResults,
                Actions = actions,
                GeneratedAt = DateTime.UtcNow
            };
        }

        private int? ResolveCurrentUserId()
        {
            var value = _httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);
            return int.TryParse(value, out var userId) ? userId : null;
        }

        private static bool IsMeaningfulCategory(string? category) =>
            !string.IsNullOrWhiteSpace(category) &&
            !category.Equals("Uncategorized", StringComparison.OrdinalIgnoreCase);

        private static string FirstNonEmpty(params string?[] values) =>
            values.FirstOrDefault(value => !string.IsNullOrWhiteSpace(value))?.Trim() ?? string.Empty;

        private static decimal RoundCurrency(decimal amount) =>
            Math.Round(amount, 2, MidpointRounding.AwayFromZero);

        private static bool ContainsAny(string source, params string[] values) =>
            values.Any(value => source.Contains(value, StringComparison.OrdinalIgnoreCase));

        private static string NormalizeText(string? value)
        {
            if (string.IsNullOrWhiteSpace(value))
            {
                return string.Empty;
            }

            var builder = new StringBuilder(value.Length);
            foreach (var character in value.Trim().ToLowerInvariant())
            {
                builder.Append(char.IsLetterOrDigit(character) ? character : ' ');
            }

            return Regex.Replace(builder.ToString(), @"\s+", " ").Trim();
        }
    }
}
