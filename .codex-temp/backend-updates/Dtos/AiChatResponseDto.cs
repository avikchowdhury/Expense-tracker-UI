namespace ExpenseTracker.Api.Dtos
{
    public class AiChatResponseDto
    {
        public string Reply { get; set; } = string.Empty;
        public string EvidenceSummary { get; set; } = string.Empty;
        public List<string> Suggestions { get; set; } = new();
        public List<string> ReferencedMetrics { get; set; } = new();
        public List<AiCopilotCardDto> Cards { get; set; } = new();
        public List<AiCopilotAlertDto> Alerts { get; set; } = new();
        public List<AiReceiptSearchResultDto> SearchResults { get; set; } = new();
        public List<AiAssistantActionDto> Actions { get; set; } = new();
        public DateTime GeneratedAt { get; set; } = DateTime.UtcNow;
    }

    public class AiReceiptSearchResultDto
    {
        public int ReceiptId { get; set; }
        public string FileName { get; set; } = string.Empty;
        public string Vendor { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public DateTime UploadedAt { get; set; }
        public string MatchReason { get; set; } = string.Empty;
    }

    public class AiAssistantActionDto
    {
        public string Type { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int? CategoryId { get; set; }
        public string? CategoryName { get; set; }
        public decimal? Amount { get; set; }
        public string? VendorPattern { get; set; }
        public int? ReceiptId { get; set; }
        public string? ReceiptLabel { get; set; }
        public string? Period { get; set; }
    }
}
