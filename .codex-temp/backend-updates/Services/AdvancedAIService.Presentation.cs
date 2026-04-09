using ExpenseTracker.Api.Dtos;
using ExpenseTracker.Api.Models;
using System.Globalization;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService
    {
        private static List<AiSubscriptionInsightDto> DetectSubscriptions(IEnumerable<Receipt> receipts)
        {
            return receipts
                .Where(receipt =>
                    !string.IsNullOrWhiteSpace(receipt.Vendor) &&
                    receipt.TotalAmount > 0m &&
                    !receipt.Vendor.Contains("unknown", StringComparison.OrdinalIgnoreCase))
                .GroupBy(receipt => receipt.Vendor!.Trim(), StringComparer.OrdinalIgnoreCase)
                .Select(group =>
                {
                    var ordered = group.OrderBy(item => item.UploadedAt).ToList();
                    var distinctMonths = ordered
                        .Select(item => $"{item.UploadedAt.Year}-{item.UploadedAt.Month}")
                        .Distinct()
                        .Count();
                    if (ordered.Count < 2 || distinctMonths < 2)
                    {
                        return null;
                    }

                    var averageAmount = ordered.Average(item => item.TotalAmount);
                    var varianceAllowance = averageAmount * 0.35m;
                    var consistentCount = ordered.Count(item => Math.Abs(item.TotalAmount - averageAmount) <= varianceAllowance);
                    if (consistentCount < Math.Max(2, ordered.Count - 1))
                    {
                        return null;
                    }

                    var intervals = ordered
                        .Zip(ordered.Skip(1), (left, right) => (right.UploadedAt - left.UploadedAt).TotalDays)
                        .Where(days => days >= 6d)
                        .ToList();
                    var averageInterval = intervals.Count > 0 ? intervals.Average() : 30d;
                    var monthlyFactor = (decimal)(30d / Math.Max(averageInterval, 1d));
                    var frequency = averageInterval switch
                    {
                        <= 12d => "Weekly",
                        <= 45d => "Monthly",
                        <= 100d => "Quarterly",
                        _ => "Recurring"
                    };

                    var previousAverage = ordered.Count > 1
                        ? ordered.Take(ordered.Count - 1).Average(item => item.TotalAmount)
                        : averageAmount;
                    var latestAmount = ordered.Last().TotalAmount;
                    var changeAmount = RoundCurrency(latestAmount - previousAverage);
                    var changeDirection = Math.Abs(changeAmount) <= Math.Max(1m, previousAverage * 0.1m)
                        ? "stable"
                        : changeAmount > 0m
                            ? "up"
                            : "down";
                    var likelyUnused = averageInterval <= 45d
                        ? ordered.Last().UploadedAt <= DateTime.UtcNow.AddDays(-50d)
                        : false;
                    var recommendation = likelyUnused
                        ? $"No recent renewal has landed for {group.Key}. Confirm whether that subscription is already cancelled."
                        : changeDirection == "up"
                            ? $"{group.Key} appears to have increased by about {Math.Abs(changeAmount):C} recently. Review whether you should downgrade or renegotiate."
                            : $"Keep {group.Key} on your watchlist before the next expected charge.";

                    return new AiSubscriptionInsightDto
                    {
                        Vendor = ordered.Last().Vendor?.Trim() ?? group.Key,
                        Category = ordered
                            .Select(item => item.Category)
                            .FirstOrDefault(category => !string.IsNullOrWhiteSpace(category))
                            ?? "Recurring",
                        AverageAmount = RoundCurrency(averageAmount),
                        EstimatedMonthlyCost = RoundCurrency(averageAmount * monthlyFactor),
                        Frequency = frequency,
                        Occurrences = ordered.Count,
                        LastSeenAt = ordered.Last().UploadedAt,
                        NextExpectedDate = ordered.Last().UploadedAt.AddDays(Math.Round(averageInterval)),
                        PriceChangeAmount = changeAmount,
                        PriceChangeDirection = changeDirection,
                        LikelyUnused = likelyUnused,
                        Recommendation = recommendation
                    };
                })
                .Where(item => item != null)
                .Cast<AiSubscriptionInsightDto>()
                .OrderByDescending(item => item.EstimatedMonthlyCost)
                .ThenBy(item => item.Vendor)
                .Take(6)
                .ToList();
        }

        private static List<AiCopilotAlertDto> BuildAlerts(
            BudgetAdvisorSnapshotDto budgetAdvisor,
            IReadOnlyList<AiSubscriptionInsightDto> subscriptions,
            int uncategorizedReceiptCount,
            IReadOnlyCollection<Receipt> receipts)
        {
            var alerts = new List<AiCopilotAlertDto>();

            if (budgetAdvisor.PaceStatus == "critical")
            {
                alerts.Add(new AiCopilotAlertDto
                {
                    Title = "Budget overspend projected",
                    Detail = $"Current pacing points to {budgetAdvisor.ProjectedSpend:C} against a {budgetAdvisor.TotalBudget:C} budget.",
                    Severity = "critical"
                });
            }
            else if (budgetAdvisor.PaceStatus == "warning")
            {
                alerts.Add(new AiCopilotAlertDto
                {
                    Title = "Budget getting tight",
                    Detail = $"Projected spend is nearing the monthly limit with only {budgetAdvisor.RemainingBudget:C} of headroom left.",
                    Severity = "warning"
                });
            }

            foreach (var category in budgetAdvisor.Categories
                         .Where(item => item.RiskLevel == "critical" || item.RiskLevel == "warning")
                         .Take(2))
            {
                alerts.Add(new AiCopilotAlertDto
                {
                    Title = $"{category.Category} needs attention",
                    Detail = category.Insight,
                    Severity = category.RiskLevel
                });
            }

            if (uncategorizedReceiptCount > 0)
            {
                alerts.Add(new AiCopilotAlertDto
                {
                    Title = "Receipt cleanup needed",
                    Detail = $"{uncategorizedReceiptCount} recent receipts are uncategorized, which weakens AI guidance.",
                    Severity = "warning"
                });
            }

            foreach (var subscription in subscriptions
                         .Where(item => item.NextExpectedDate.HasValue && item.NextExpectedDate.Value <= DateTime.UtcNow.AddDays(10))
                         .Take(2))
            {
                alerts.Add(new AiCopilotAlertDto
                {
                    Title = $"Upcoming recurring charge: {subscription.Vendor}",
                    Detail = $"Expected around {subscription.NextExpectedDate:MMM d} for about {subscription.AverageAmount:C}.",
                    Severity = subscription.PriceChangeDirection == "up" ? "warning" : "info"
                });
            }

            if (receipts.Count >= 8 && subscriptions.Count == 0)
            {
                alerts.Add(new AiCopilotAlertDto
                {
                    Title = "Recurring spend still learning",
                    Detail = "Upload a few more monthly receipts from the same vendors and the copilot will start detecting subscriptions.",
                    Severity = "info"
                });
            }

            return alerts;
        }

        private static List<AiCopilotCardDto> BuildBudgetCards(AiInsightSnapshotDto snapshot)
        {
            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Budget health",
                    Value = snapshot.BudgetHealth,
                    Detail = snapshot.Forecast?.CutSuggestion ?? "Budget insight is warming up.",
                    Tone = snapshot.Forecast?.OverBudgetAmount > 0m ? "warning" : "positive"
                },
                new()
                {
                    Title = "Projected spend",
                    Value = $"{snapshot.Forecast?.ProjectedSpend ?? snapshot.MonthSpend:C}",
                    Detail = "Expected month-end total at the current pace.",
                    Tone = "default"
                },
                new()
                {
                    Title = "Risk category",
                    Value = snapshot.Forecast?.LeadingRiskCategory ?? snapshot.TopCategory,
                    Detail = "Category creating the most pressure right now.",
                    Tone = snapshot.Forecast?.OverBudgetAmount > 0m ? "warning" : "default"
                }
            };
        }

        private static List<AiCopilotCardDto> BuildSubscriptionCards(AiInsightSnapshotDto snapshot)
        {
            var lead = snapshot.Subscriptions.FirstOrDefault();

            return new List<AiCopilotCardDto>
            {
                new()
                {
                    Title = "Recurring vendors",
                    Value = snapshot.Subscriptions.Count.ToString(CultureInfo.InvariantCulture),
                    Detail = "Detected from repeat merchant patterns in receipt history.",
                    Tone = snapshot.Subscriptions.Count > 0 ? "positive" : "default"
                },
                new()
                {
                    Title = "Recurring monthly total",
                    Value = $"{snapshot.Subscriptions.Sum(item => item.EstimatedMonthlyCost):C}",
                    Detail = "Estimated monthly cost from likely subscriptions.",
                    Tone = "warning"
                },
                new()
                {
                    Title = "Next due vendor",
                    Value = lead?.Vendor ?? "No signal",
                    Detail = lead?.Recommendation ?? "Need more recurring history to predict the next billing date.",
                    Tone = lead?.PriceChangeDirection == "up" ? "warning" : "default"
                }
            };
        }
    }
}
