namespace ExpenseTracker.Api.Dtos
{
    public class AiInsightSnapshotDto
    {
        public DateTime GeneratedAt { get; set; } = DateTime.UtcNow;
        public string BudgetHealth { get; set; } = "Learning";
        public string EvidenceSummary { get; set; } = string.Empty;
        public decimal MonthSpend { get; set; }
        public decimal RecentAverage { get; set; }
        public string TopCategory { get; set; } = "N/A";
        public List<string> Anomalies { get; set; } = new();
        public List<string> Suggestions { get; set; } = new();
        public List<AiInsightDto> Insights { get; set; } = new();
        public List<AiCopilotAlertDto> Alerts { get; set; } = new();
        public List<AiSubscriptionInsightDto> Subscriptions { get; set; } = new();
        public AiBudgetForecastDto? Forecast { get; set; }
        public List<AiVendorRuleSuggestionDto> VendorRuleSuggestions { get; set; } = new();
        public List<AiCoachTipDto> CoachTips { get; set; } = new();
        public List<AiMonthlySummaryDto> Summaries { get; set; } = new();
    }

    public class AiBudgetForecastDto
    {
        public decimal ProjectedSpend { get; set; }
        public decimal RemainingBudget { get; set; }
        public decimal OverBudgetAmount { get; set; }
        public string LeadingRiskCategory { get; set; } = "N/A";
        public DateTime? BudgetRunwayDate { get; set; }
        public string CutSuggestion { get; set; } = string.Empty;
    }

    public class AiVendorRuleSuggestionDto
    {
        public string VendorPattern { get; set; } = string.Empty;
        public string VendorLabel { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public decimal Confidence { get; set; }
        public string Reason { get; set; } = string.Empty;
        public int MatchCount { get; set; }
        public bool ExistingRule { get; set; }
    }

    public class AiCoachTipDto
    {
        public string Title { get; set; } = string.Empty;
        public string Detail { get; set; } = string.Empty;
        public string Tone { get; set; } = "default";
    }

    public class AiMonthlySummaryDto
    {
        public string Title { get; set; } = string.Empty;
        public string Summary { get; set; } = string.Empty;
        public string PeriodLabel { get; set; } = string.Empty;
    }
}
