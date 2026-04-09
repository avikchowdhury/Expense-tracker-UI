using ExpenseTracker.Api.Dtos;
using System.Globalization;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService
    {
        private static List<AiCopilotCardDto> BuildCategoryCards(AiInsightSnapshotDto snapshot)
        {
            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Top category",
                    Value = snapshot.TopCategory,
                    Detail = "Largest categorized spend signal this month.",
                    Tone = snapshot.TopCategory == "N/A" ? "default" : "positive"
                },
                new()
                {
                    Title = "Recent average",
                    Value = $"{snapshot.RecentAverage:C}",
                    Detail = "Average of your recent tracked months.",
                    Tone = "default"
                },
                new()
                {
                    Title = "Active anomalies",
                    Value = snapshot.Anomalies.Count.ToString(CultureInfo.InvariantCulture),
                    Detail = "Signals the copilot wants you to review.",
                    Tone = snapshot.Anomalies.Count > 0 ? "warning" : "positive"
                }
            };
        }

        private static List<AiCopilotCardDto> BuildReceiptCards(AiInsightSnapshotDto snapshot)
        {
            var receiptActivity = snapshot.Insights.FirstOrDefault(insight => insight.Title == "Receipt activity");

            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Recent uploads",
                    Value = receiptActivity?.MetricValue ?? "0",
                    Detail = receiptActivity?.Summary ?? "No recent receipt activity.",
                    Tone = "default"
                },
                new()
                {
                    Title = "Rule suggestions",
                    Value = snapshot.VendorRuleSuggestions.Count.ToString(CultureInfo.InvariantCulture),
                    Detail = "Automation ideas based on vendor history.",
                    Tone = snapshot.VendorRuleSuggestions.Count > 0 ? "positive" : "default"
                },
                new()
                {
                    Title = "Receipt alerts",
                    Value = snapshot.Alerts.Count.ToString(CultureInfo.InvariantCulture),
                    Detail = "Alerts currently tied to receipts or pacing.",
                    Tone = snapshot.Alerts.Count > 0 ? "warning" : "positive"
                }
            };
        }

        private static List<AiCopilotCardDto> BuildAlertCards(AiInsightSnapshotDto snapshot)
        {
            return snapshot.Alerts.Take(3).Select(alert => new AiCopilotCardDto
            {
                Title = alert.Title,
                Value = alert.Severity.Equals("critical", StringComparison.OrdinalIgnoreCase) ? "High" :
                    alert.Severity.Equals("warning", StringComparison.OrdinalIgnoreCase) ? "Watch" : "Info",
                Detail = alert.Detail,
                Tone = alert.Severity.Equals("critical", StringComparison.OrdinalIgnoreCase)
                    ? "critical"
                    : alert.Severity.Equals("warning", StringComparison.OrdinalIgnoreCase)
                        ? "warning"
                        : "default"
            }).ToList();
        }

        private static List<AiCopilotCardDto> BuildGeneralCards(AiInsightSnapshotDto snapshot)
        {
            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Budget health",
                    Value = snapshot.BudgetHealth,
                    Detail = "Grounded in your live budget and receipt activity.",
                    Tone = snapshot.Anomalies.Count > 0 ? "warning" : "positive"
                },
                new()
                {
                    Title = "Top category",
                    Value = snapshot.TopCategory,
                    Detail = "Current month leader across categorized receipts.",
                    Tone = snapshot.TopCategory == "N/A" ? "default" : "positive"
                },
                new()
                {
                    Title = "Projected spend",
                    Value = $"{snapshot.Forecast?.ProjectedSpend ?? snapshot.MonthSpend:C}",
                    Detail = snapshot.Forecast?.CutSuggestion ?? "Forecast will sharpen as more receipts arrive.",
                    Tone = snapshot.Forecast?.OverBudgetAmount > 0m ? "warning" : "default"
                }
            };
        }

        private static List<AiCopilotCardDto> BuildSearchCards(IReadOnlyCollection<AiReceiptSearchResultDto> results)
        {
            var total = RoundCurrency(results.Sum(result => result.Amount));
            var largest = results.OrderByDescending(result => result.Amount).FirstOrDefault();

            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Matches",
                    Value = results.Count.ToString(CultureInfo.InvariantCulture),
                    Detail = "Recent receipts matching your search.",
                    Tone = "positive"
                },
                new()
                {
                    Title = "Matched total",
                    Value = $"{total:C}",
                    Detail = "Combined spend from the matched receipts.",
                    Tone = "default"
                },
                new()
                {
                    Title = "Largest match",
                    Value = largest?.Vendor ?? "N/A",
                    Detail = largest == null ? "No matching receipt found." : $"{largest.Amount:C} on {largest.UploadedAt:MMM d}",
                    Tone = "default"
                }
            };
        }

        private static List<AiCopilotCardDto> BuildDriftCards(CategoryDriftResult drift)
        {
            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Category",
                    Value = drift.Category,
                    Detail = "Biggest month-over-month increase.",
                    Tone = "warning"
                },
                new()
                {
                    Title = "Current month",
                    Value = $"{drift.CurrentSpend:C}",
                    Detail = "Spend tracked in the current month.",
                    Tone = "default"
                },
                new()
                {
                    Title = "Increase",
                    Value = $"{drift.Delta:C}",
                    Detail = $"Up from {drift.PreviousSpend:C} last month.",
                    Tone = "warning"
                }
            };
        }

        private static int GetSeverityRank(string severity) => severity switch
        {
            "critical" => 3,
            "warning" => 2,
            "positive" => 1,
            _ => 0
        };

        private static string JoinLabels(IReadOnlyCollection<string> labels)
        {
            if (labels.Count == 0)
            {
                return string.Empty;
            }

            if (labels.Count == 1)
            {
                return labels.First();
            }

            return string.Join(", ", labels.Take(labels.Count - 1)) + $" and {labels.Last()}";
        }

        private static int GetMatchScore(string message, string candidate)
        {
            var normalizedCandidate = NormalizeText(candidate);
            if (string.IsNullOrWhiteSpace(normalizedCandidate))
            {
                return 0;
            }

            if (message.Contains(normalizedCandidate, StringComparison.OrdinalIgnoreCase))
            {
                return normalizedCandidate.Length + 20;
            }

            return normalizedCandidate
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .Count(token => token.Length > 2 && message.Contains(token, StringComparison.OrdinalIgnoreCase));
        }
    }
}
