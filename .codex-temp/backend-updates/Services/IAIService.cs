using ExpenseTracker.Api.Dtos;
using Microsoft.AspNetCore.Http;

namespace ExpenseTracker.Api.Services
{
    public interface IAIService
    {
        Task<ReceiptParseResult> ParseReceiptAsync(IFormFile file);
        Task<AiInsightSnapshotDto> GetInsightsAsync(int userId);
        Task<List<AiSubscriptionInsightDto>> GetSubscriptionsAsync(int userId);
        Task<AiChatResponseDto> ChatAsync(int userId, string message);
    }

    public class ReceiptParseResult
    {
        public string Vendor { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string Category { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string RawText { get; set; } = string.Empty;
        public decimal Confidence { get; set; }
        public bool NeedsReview { get; set; }
        public string Summary { get; set; } = string.Empty;
        public string PaymentMethod { get; set; } = "Unknown";
        public decimal? Subtotal { get; set; }
        public decimal? Tax { get; set; }
        public List<ReceiptParseLineItem> Items { get; set; } = new();
        public List<ReceiptDuplicateCandidate> PossibleDuplicates { get; set; } = new();
        public List<AiVendorRuleSuggestionDto> SuggestedVendorRules { get; set; } = new();
    }

    public class ReceiptParseLineItem
    {
        public string Name { get; set; } = string.Empty;
        public decimal Price { get; set; }
    }

    public class ReceiptDuplicateCandidate
    {
        public int ReceiptId { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string Vendor { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime UploadedAt { get; set; }
        public string Reason { get; set; } = string.Empty;
    }
}
