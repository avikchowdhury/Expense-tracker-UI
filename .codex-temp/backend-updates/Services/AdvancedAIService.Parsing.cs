using ExpenseTracker.Api.Dtos;
using ExpenseTracker.Api.Models;
using System.Globalization;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService
    {
        private async Task<ReceiptModelExtraction?> TryEnhanceReceiptParseAsync(
            string fileName,
            ReceiptFallbackData fallback,
            IReadOnlyCollection<string> categories)
        {
            var apiKey = _configuration["OpenAI:ApiKey"];
            var model = _configuration["OpenAI:Model"] ?? "gpt-5-mini";
            var endpoint = _configuration["OpenAI:ResponsesEndpoint"] ?? "https://api.openai.com/v1/responses";

            if (string.IsNullOrWhiteSpace(apiKey) || string.IsNullOrWhiteSpace(endpoint))
            {
                return null;
            }

            try
            {
                using var request = new HttpRequestMessage(HttpMethod.Post, endpoint);
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
                request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var requestBody = new
                {
                    model,
                    reasoning = new
                    {
                        effort = "low"
                    },
                    instructions =
                        "You structure receipt text for an expense tracker. Return JSON only. " +
                        "Use these keys: vendor, amount, category, date, confidence, paymentMethod, subtotal, tax, items, summary. " +
                        "items must be an array of objects with name and price. " +
                        "If a field is unknown, use null. Do not add markdown fences.",
                    input = BuildReceiptPrompt(fileName, fallback, categories)
                };

                request.Content = new StringContent(
                    JsonSerializer.Serialize(requestBody),
                    Encoding.UTF8,
                    "application/json");

                using var response = await _httpClient.SendAsync(request);
                if (!response.IsSuccessStatusCode)
                {
                    return null;
                }

                var json = await response.Content.ReadAsStringAsync();
                var responseText = ExtractResponseText(json);
                return ParseReceiptModelExtraction(responseText);
            }
            catch (Exception exception)
            {
                _logger.LogWarning(exception, "Receipt parse model enhancement failed.");
                return null;
            }
        }

        private static string BuildReceiptPrompt(
            string fileName,
            ReceiptFallbackData fallback,
            IReadOnlyCollection<string> categories)
        {
            var text = fallback.RawText;
            if (text.Length > 5000)
            {
                text = text[..5000];
            }

            return
                $"File name: {fileName}\n" +
                $"Fallback vendor: {fallback.Vendor}\n" +
                $"Fallback amount: {fallback.Amount}\n" +
                $"Fallback category: {fallback.Category}\n" +
                $"Fallback date: {fallback.Date}\n" +
                $"Known categories: {string.Join(", ", categories)}\n\n" +
                $"Extracted receipt text:\n{text}\n";
        }

        private static ReceiptModelExtraction? ParseReceiptModelExtraction(string? responseText)
        {
            if (string.IsNullOrWhiteSpace(responseText))
            {
                return null;
            }

            var jsonStart = responseText.IndexOf('{');
            var jsonEnd = responseText.LastIndexOf('}');
            if (jsonStart < 0 || jsonEnd <= jsonStart)
            {
                return null;
            }

            var json = responseText[jsonStart..(jsonEnd + 1)];
            try
            {
                var parsed = JsonSerializer.Deserialize<ReceiptModelExtraction>(json, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (parsed?.Items == null)
                {
                    return parsed;
                }

                parsed.Items = parsed.Items
                    .Where(item => !string.IsNullOrWhiteSpace(item.Name))
                    .Select(item => new ReceiptParseLineItem
                    {
                        Name = item.Name.Trim(),
                        Price = RoundCurrency(item.Price)
                    })
                    .ToList();

                return parsed;
            }
            catch
            {
                return null;
            }
        }

        private CategorySuggestionResult SuggestCategory(
            string vendor,
            string rawText,
            IReadOnlyCollection<Category> categories,
            IReadOnlyCollection<VendorCategoryRule> rules,
            IReadOnlyCollection<Receipt> previousReceipts,
            string fallbackCategory,
            string? modelCategory)
        {
            var normalizedVendor = NormalizeText(vendor);
            var matchedRule = rules.FirstOrDefault(rule =>
                !string.IsNullOrWhiteSpace(rule.VendorPattern) &&
                normalizedVendor.Contains(NormalizeText(rule.VendorPattern), StringComparison.OrdinalIgnoreCase));

            if (matchedRule?.Category != null)
            {
                return new CategorySuggestionResult(matchedRule.Category.Name, 0.98m);
            }

            var matchedVendorHistory = previousReceipts
                .Where(receipt => !string.IsNullOrWhiteSpace(receipt.Vendor) && !string.IsNullOrWhiteSpace(receipt.Category))
                .Where(receipt => NormalizeText(receipt.Vendor!).Equals(normalizedVendor, StringComparison.OrdinalIgnoreCase))
                .GroupBy(receipt => receipt.Category!, StringComparer.OrdinalIgnoreCase)
                .OrderByDescending(group => group.Count())
                .Select(group => new { Category = group.Key, Count = group.Count() })
                .FirstOrDefault();

            if (matchedVendorHistory != null && matchedVendorHistory.Count >= 2)
            {
                var confidence = Math.Min(0.95m, 0.70m + (matchedVendorHistory.Count * 0.07m));
                return new CategorySuggestionResult(matchedVendorHistory.Category, confidence);
            }

            if (IsMeaningfulCategory(modelCategory))
            {
                return new CategorySuggestionResult(modelCategory!, 0.88m);
            }

            var fallbackNormalized = NormalizeText(fallbackCategory);
            var matchingCategory = categories.FirstOrDefault(category =>
                NormalizeText(category.Name).Equals(fallbackNormalized, StringComparison.OrdinalIgnoreCase));
            if (matchingCategory != null)
            {
                return new CategorySuggestionResult(matchingCategory.Name, 0.76m);
            }

            if (IsMeaningfulCategory(fallbackCategory))
            {
                return new CategorySuggestionResult(fallbackCategory, 0.68m);
            }

            var lowerRawText = rawText.ToLowerInvariant();
            var keywordCategory = CommonCategories.FirstOrDefault(category =>
                lowerRawText.Contains(category.ToLowerInvariant(), StringComparison.OrdinalIgnoreCase));
            if (!string.IsNullOrWhiteSpace(keywordCategory))
            {
                return new CategorySuggestionResult(keywordCategory, 0.58m);
            }

            return new CategorySuggestionResult("Uncategorized", 0.38m);
        }

        private static string NormalizeCategoryChoice(params string?[] candidates)
        {
            foreach (var candidate in candidates)
            {
                if (IsMeaningfulCategory(candidate))
                {
                    return candidate!.Trim();
                }
            }

            return "Uncategorized";
        }

        private static List<ReceiptDuplicateCandidate> BuildDuplicateCandidates(
            IReadOnlyCollection<Receipt> receipts,
            string vendor,
            decimal amount,
            string fileName)
        {
            if (amount <= 0m)
            {
                return new List<ReceiptDuplicateCandidate>();
            }

            var normalizedVendor = NormalizeText(vendor);
            var normalizedFileName = NormalizeText(Path.GetFileNameWithoutExtension(fileName));

            return receipts
                .Where(receipt => receipt.TotalAmount > 0m)
                .Where(receipt =>
                    (Math.Abs(receipt.TotalAmount - amount) <= 0.01m &&
                     !string.IsNullOrWhiteSpace(receipt.Vendor) &&
                     NormalizeText(receipt.Vendor!).Equals(normalizedVendor, StringComparison.OrdinalIgnoreCase) &&
                     Math.Abs((receipt.UploadedAt - DateTime.UtcNow).TotalDays) <= 14) ||
                    NormalizeText(Path.GetFileNameWithoutExtension(receipt.FileName)).Equals(normalizedFileName, StringComparison.OrdinalIgnoreCase))
                .OrderByDescending(receipt => receipt.UploadedAt)
                .Take(3)
                .Select(receipt => new ReceiptDuplicateCandidate
                {
                    ReceiptId = receipt.Id,
                    FileName = receipt.FileName,
                    Vendor = receipt.Vendor ?? "Unknown vendor",
                    Amount = RoundCurrency(receipt.TotalAmount),
                    UploadedAt = receipt.UploadedAt,
                    Reason = "Similar vendor, amount, or filename already exists in your receipt history."
                })
                .ToList();
        }

        private static string InferPaymentMethod(string rawText)
        {
            var lower = rawText.ToLowerInvariant();
            if (ContainsAny(lower, "visa", "mastercard", "amex", "credit card"))
            {
                return "Credit card";
            }

            if (ContainsAny(lower, "debit", "checking"))
            {
                return "Debit card";
            }

            if (ContainsAny(lower, "cash", "paid cash"))
            {
                return "Cash";
            }

            if (ContainsAny(lower, "upi", "paytm", "gpay", "google pay", "phonepe", "wallet"))
            {
                return "Digital wallet";
            }

            return "Unknown";
        }

        private static decimal? ExtractTax(string rawText)
        {
            var match = TaxRegex.Match(rawText);
            if (!match.Success)
            {
                return null;
            }

            if (!decimal.TryParse(
                    match.Groups["amount"].Value.Replace(',', '.'),
                    NumberStyles.Number,
                    CultureInfo.InvariantCulture,
                    out var parsed))
            {
                return null;
            }

            return RoundCurrency(parsed);
        }

        private static string BuildReceiptSummary(string vendor, decimal amount, string category, decimal confidence, int duplicateCount)
        {
            var duplicateSummary = duplicateCount > 0
                ? $" {duplicateCount} similar receipt{(duplicateCount == 1 ? string.Empty : "s")} already exist."
                : string.Empty;

            return $"{vendor} looks like a {category} expense for {amount:C}. Category confidence is {(confidence * 100):0}%." +
                   duplicateSummary;
        }

        private async Task<string> TryGenerateModelReplyAsync(
            string userMessage,
            AiInsightSnapshotDto snapshot,
            string fallbackReply,
            IReadOnlyCollection<AiReceiptSearchResultDto> searchResults,
            IReadOnlyCollection<AiAssistantActionDto> actions)
        {
            var apiKey = _configuration["OpenAI:ApiKey"];
            var model = _configuration["OpenAI:Model"] ?? "gpt-5-mini";
            var endpoint = _configuration["OpenAI:ResponsesEndpoint"] ?? "https://api.openai.com/v1/responses";

            if (string.IsNullOrWhiteSpace(apiKey) || string.IsNullOrWhiteSpace(endpoint))
            {
                return fallbackReply;
            }

            try
            {
                using var request = new HttpRequestMessage(HttpMethod.Post, endpoint);
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", apiKey);
                request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var requestBody = new
                {
                    model,
                    reasoning = new
                    {
                        effort = "low"
                    },
                    instructions = BuildCopilotInstructions(),
                    input = BuildGroundedPrompt(userMessage, snapshot, fallbackReply, searchResults, actions)
                };

                request.Content = new StringContent(
                    JsonSerializer.Serialize(requestBody),
                    Encoding.UTF8,
                    "application/json");

                using var response = await _httpClient.SendAsync(request);
                if (!response.IsSuccessStatusCode)
                {
                    return fallbackReply;
                }

                var json = await response.Content.ReadAsStringAsync();
                var modelReply = ExtractResponseText(json);
                return string.IsNullOrWhiteSpace(modelReply) ? fallbackReply : modelReply.Trim();
            }
            catch (Exception exception)
            {
                _logger.LogWarning(exception, "AI chat reply generation failed.");
                return fallbackReply;
            }
        }

        private static string BuildGroundedPrompt(
            string userMessage,
            AiInsightSnapshotDto snapshot,
            string fallbackReply,
            IReadOnlyCollection<AiReceiptSearchResultDto> searchResults,
            IReadOnlyCollection<AiAssistantActionDto> actions)
        {
            var subscriptions = snapshot.Subscriptions.Count == 0
                ? "None detected yet."
                : string.Join("; ", snapshot.Subscriptions.Select(item =>
                    $"{item.Vendor} ({item.Frequency}, ~{item.EstimatedMonthlyCost:C}/month, next expected {item.NextExpectedDate:yyyy-MM-dd})"));
            var alerts = snapshot.Alerts.Count == 0
                ? "No active alerts."
                : string.Join("; ", snapshot.Alerts.Select(alert =>
                    $"{alert.Title}: {alert.Detail} [{alert.Severity}]"));
            var searchSummary = searchResults.Count == 0
                ? "No structured search results."
                : string.Join("; ", searchResults.Select(result =>
                    $"{result.Vendor} {result.Amount:C} on {result.UploadedAt:yyyy-MM-dd} ({result.Category})"));
            var actionSummary = actions.Count == 0
                ? "No prepared actions."
                : string.Join("; ", actions.Select(action =>
                    $"{action.Type}: {action.Label}"));

            return
                $"User question: {userMessage}\n\n" +
                $"Tracker evidence: {snapshot.EvidenceSummary}\n" +
                $"Budget health: {snapshot.BudgetHealth}\n" +
                $"Month spend: {snapshot.MonthSpend:C}\n" +
                $"Recent average: {snapshot.RecentAverage:C}\n" +
                $"Top category: {snapshot.TopCategory}\n" +
                $"Forecast: {snapshot.Forecast?.ProjectedSpend:C} projected, runway {snapshot.Forecast?.BudgetRunwayDate:yyyy-MM-dd}\n" +
                $"Alerts: {alerts}\n" +
                $"Recurring subscriptions: {subscriptions}\n" +
                $"Search results: {searchSummary}\n" +
                $"Prepared actions: {actionSummary}\n" +
                $"Suggested next moves: {string.Join("; ", snapshot.Suggestions)}\n\n" +
                $"Fallback grounded answer: {fallbackReply}\n\n" +
                "Answer using only the tracker evidence above. If an action exists, present it as a suggestion that still needs user confirmation. Do not say an action already happened.";
        }

        private static string BuildCopilotInstructions()
        {
            return
                "You are the AI Expense Tracker copilot inside a personal finance web app. " +
                "Be warm, practical, and concise. " +
                "Use only the provided tracker evidence. Never invent receipts, budgets, categories, or actions. " +
                "When search results exist, summarize them directly. " +
                "When prepared actions exist, mention that the user can click them, but never imply they already ran. " +
                "Prefer one short paragraph unless the user explicitly asked for steps or a comparison.";
        }

        private static string? ExtractResponseText(string json)
        {
            using var document = JsonDocument.Parse(json);

            if (document.RootElement.TryGetProperty("output_text", out var outputTextElement))
            {
                var outputText = outputTextElement.GetString();
                if (!string.IsNullOrWhiteSpace(outputText))
                {
                    return outputText;
                }
            }

            if (!document.RootElement.TryGetProperty("output", out var outputElement) ||
                outputElement.ValueKind != JsonValueKind.Array)
            {
                return null;
            }

            foreach (var outputItem in outputElement.EnumerateArray())
            {
                if (!outputItem.TryGetProperty("content", out var contentElement) ||
                    contentElement.ValueKind != JsonValueKind.Array)
                {
                    continue;
                }

                foreach (var contentItem in contentElement.EnumerateArray())
                {
                    if (contentItem.TryGetProperty("type", out var typeElement) &&
                        string.Equals(typeElement.GetString(), "output_text", StringComparison.OrdinalIgnoreCase) &&
                        contentItem.TryGetProperty("text", out var textElement))
                    {
                        return textElement.GetString();
                    }
                }
            }

            return null;
        }
    }
}
