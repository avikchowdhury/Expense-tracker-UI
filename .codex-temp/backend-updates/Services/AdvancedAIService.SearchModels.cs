using ExpenseTracker.Api.Dtos;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService
    {
        private static DateWindow? ResolveDateWindow(string lowerMessage)
        {
            var now = DateTime.UtcNow;
            if (lowerMessage.Contains("last month", StringComparison.OrdinalIgnoreCase))
            {
                var start = new DateTime(now.Year, now.Month, 1).AddMonths(-1);
                return new DateWindow(start, start.AddMonths(1), "last month");
            }

            if (lowerMessage.Contains("this month", StringComparison.OrdinalIgnoreCase) ||
                lowerMessage.Contains("current month", StringComparison.OrdinalIgnoreCase))
            {
                var start = new DateTime(now.Year, now.Month, 1);
                return new DateWindow(start, start.AddMonths(1), "this month");
            }

            if (lowerMessage.Contains("last 30 days", StringComparison.OrdinalIgnoreCase))
            {
                return new DateWindow(now.AddDays(-30), now.AddDays(1), "last 30 days");
            }

            if (lowerMessage.Contains("this week", StringComparison.OrdinalIgnoreCase))
            {
                var diff = (7 + (now.DayOfWeek - DayOfWeek.Monday)) % 7;
                var start = now.Date.AddDays(-diff);
                return new DateWindow(start, start.AddDays(7), "this week");
            }

            return null;
        }

        private sealed class ReceiptModelExtraction
        {
            public string? Vendor { get; set; }
            public decimal? Amount { get; set; }
            public string? Category { get; set; }
            public string? Date { get; set; }
            public decimal? Confidence { get; set; }
            public string? PaymentMethod { get; set; }
            public decimal? Subtotal { get; set; }
            public decimal? Tax { get; set; }
            public List<ReceiptParseLineItem> Items { get; set; } = new();
            public string? Summary { get; set; }
        }

        private sealed class CategorySuggestionResult
        {
            public CategorySuggestionResult(string category, decimal confidence)
            {
                Category = category;
                Confidence = confidence;
            }

            public string Category { get; }
            public decimal Confidence { get; }
        }

        private sealed class SearchResponseContext
        {
            public static SearchResponseContext Empty { get; } = new(string.Empty, new List<AiReceiptSearchResultDto>(), new List<string>());

            public SearchResponseContext(
                string reply,
                List<AiReceiptSearchResultDto> results,
                List<string> referencedMetrics)
            {
                Reply = reply;
                Results = results;
                ReferencedMetrics = referencedMetrics;
            }

            public string Reply { get; }
            public List<AiReceiptSearchResultDto> Results { get; }
            public List<string> ReferencedMetrics { get; }
        }

        private sealed class CategoryDriftResult
        {
            public CategoryDriftResult(string category, decimal previousSpend, decimal currentSpend)
            {
                Category = category;
                PreviousSpend = previousSpend;
                CurrentSpend = currentSpend;
            }

            public string Category { get; }
            public decimal PreviousSpend { get; }
            public decimal CurrentSpend { get; }
            public decimal Delta => RoundCurrency(CurrentSpend - PreviousSpend);
        }

        private sealed class DateWindow
        {
            public DateWindow(DateTime start, DateTime end, string label)
            {
                Start = start;
                End = end;
                Label = label;
            }

            public DateTime Start { get; }
            public DateTime End { get; }
            public string Label { get; }
        }
    }
}
