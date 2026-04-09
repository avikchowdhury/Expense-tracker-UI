using ExpenseTracker.Api.Dtos;
using ExpenseTracker.Api.Models;
using System.Globalization;

namespace ExpenseTracker.Api.Services
{
    public partial class AdvancedAIService
    {
        private static List<string> BuildSuggestions(
            BudgetAdvisorSnapshotDto budgetAdvisor,
            AiBudgetForecastDto forecast,
            IReadOnlyList<AiVendorRuleSuggestionDto> vendorRuleSuggestions,
            IReadOnlyList<AiCopilotAlertDto> duplicateAlerts)
        {
            return budgetAdvisor.Recommendations
                .Concat(new[]
                {
                    forecast.CutSuggestion
                })
                .Concat(vendorRuleSuggestions.Select(suggestion =>
                    $"Consider a vendor rule for {suggestion.VendorLabel} -> {suggestion.CategoryName}."))
                .Concat(duplicateAlerts.Select(alert => alert.Detail))
                .Where(item => !string.IsNullOrWhiteSpace(item))
                .Distinct(StringComparer.OrdinalIgnoreCase)
                .Take(4)
                .ToList();
        }

        private static List<AiInsightDto> BuildInsights(
            BudgetHealthSnapshot budgetSnapshot,
            BudgetAdvisorSnapshotDto budgetAdvisor,
            IReadOnlyList<AiSubscriptionInsightDto> subscriptions,
            IReadOnlyList<AiVendorRuleSuggestionDto> vendorRuleSuggestions,
            string topCategory,
            decimal monthSpend,
            decimal recentAverage,
            IReadOnlyCollection<Receipt> monthReceipts,
            AiBudgetForecastDto forecast)
        {
            var insights = new List<AiInsightDto>();
            var ratio = budgetSnapshot.Budget > 0m ? monthSpend / budgetSnapshot.Budget : 0m;

            if (budgetSnapshot.BudgetCount > 0)
            {
                insights.Add(new AiInsightDto
                {
                    Title = "Budget pulse",
                    Summary = $"You have spent {monthSpend:C} against a combined {budgetSnapshot.Budget:C} budget this month.",
                    Severity = ratio >= 1m ? "critical" : ratio >= 0.8m ? "warning" : "positive",
                    MetricLabel = "Budget used",
                    MetricValue = $"{Math.Round(ratio * 100, 0)}%",
                    Action = ratio >= 0.8m ? "Review your highest-pressure category before the next upload batch." : "Keep your current pace and monitor weekly trends."
                });
            }
            else
            {
                insights.Add(new AiInsightDto
                {
                    Title = "Budget setup missing",
                    Summary = "Add a monthly budget to unlock more precise overspend coaching and runway forecasts.",
                    Severity = "info",
                    Action = "Create a General budget first so the assistant can flag risk earlier."
                });
            }

            insights.Add(new AiInsightDto
            {
                Title = "Month-end forecast",
                Summary = $"Projected spend is {forecast.ProjectedSpend:C}. {forecast.CutSuggestion}",
                Severity = forecast.OverBudgetAmount > 0m ? "warning" : "positive",
                MetricLabel = "Projected",
                MetricValue = $"{forecast.ProjectedSpend:C0}",
                Action = forecast.BudgetRunwayDate.HasValue
                    ? $"At the current pace your budget runway lands around {forecast.BudgetRunwayDate:MMM d}."
                    : "No budget runway pressure is active yet."
            });

            insights.Add(new AiInsightDto
            {
                Title = "Category focus",
                Summary = topCategory == "N/A"
                    ? "No dominant category yet because recent receipts are limited."
                    : $"{topCategory} is your leading category in the current month.",
                Severity = topCategory == "N/A" ? "info" : "positive",
                MetricLabel = "Top category",
                MetricValue = topCategory,
                Action = topCategory == "N/A"
                    ? "Upload more receipts for stronger categorization trends."
                    : $"Compare {topCategory} against your recent average of {recentAverage:C} to spot drift."
            });

            var latestReceipt = monthReceipts.OrderByDescending(receipt => receipt.UploadedAt).FirstOrDefault();
            insights.Add(new AiInsightDto
            {
                Title = "Receipt activity",
                Summary = latestReceipt == null
                    ? "No receipts have been uploaded yet this month."
                    : $"Your latest receipt is from {latestReceipt.Vendor ?? "an unknown vendor"} for {latestReceipt.TotalAmount:C}.",
                Severity = latestReceipt == null ? "info" : "positive",
                MetricLabel = "Recent uploads",
                MetricValue = monthReceipts.Take(5).Count().ToString(CultureInfo.InvariantCulture),
                Action = latestReceipt == null
                    ? "Upload a receipt to start generating AI guidance."
                    : "Use the receipts page to correct categories before the next insight refresh."
            });

            if (subscriptions.Count > 0)
            {
                var lead = subscriptions[0];
                insights.Add(new AiInsightDto
                {
                    Title = "Recurring spend watch",
                    Summary = $"{subscriptions.Count} subscription-like merchants stand out. {lead.Vendor} is the strongest recurring signal.",
                    Severity = lead.PriceChangeDirection == "up" ? "warning" : "positive",
                    MetricLabel = "Recurring monthly",
                    MetricValue = $"{subscriptions.Sum(item => item.EstimatedMonthlyCost):C0}",
                    Action = lead.Recommendation
                });
            }

            if (vendorRuleSuggestions.Count > 0)
            {
                var suggestion = vendorRuleSuggestions[0];
                insights.Add(new AiInsightDto
                {
                    Title = "Automation opportunity",
                    Summary = $"{vendorRuleSuggestions.Count} vendor-rule suggestions are ready. {suggestion.VendorLabel} consistently maps to {suggestion.CategoryName}.",
                    Severity = "positive",
                    MetricLabel = "Rule ideas",
                    MetricValue = vendorRuleSuggestions.Count.ToString(CultureInfo.InvariantCulture),
                    Action = $"Create a vendor rule for {suggestion.VendorPattern} so future uploads land in {suggestion.CategoryName} automatically."
                });
            }

            return insights;
        }

        private static AiBudgetForecastDto BuildForecast(BudgetAdvisorSnapshotDto budgetAdvisor, DateTime now)
        {
            var leadingRisk = budgetAdvisor.Categories
                .OrderByDescending(category => Math.Max(category.ProjectedSpend - category.Budget, category.Spent))
                .FirstOrDefault();
            var overBudgetAmount = budgetAdvisor.TotalBudget > 0m
                ? Math.Max(budgetAdvisor.ProjectedSpend - budgetAdvisor.TotalBudget, 0m)
                : 0m;

            DateTime? runwayDate = null;
            if (budgetAdvisor.TotalBudget > 0m &&
                budgetAdvisor.CurrentSpend > 0m &&
                budgetAdvisor.DaysElapsed > 0 &&
                budgetAdvisor.RemainingBudget > 0m)
            {
                var dailySpend = budgetAdvisor.CurrentSpend / budgetAdvisor.DaysElapsed;
                if (dailySpend > 0m)
                {
                    var daysLeft = Math.Ceiling((double)(budgetAdvisor.RemainingBudget / dailySpend));
                    if (daysLeft <= budgetAdvisor.DaysRemaining + 1)
                    {
                        runwayDate = now.Date.AddDays(daysLeft);
                    }
                }
            }

            var cutSuggestion = overBudgetAmount > 0m
                ? $"Trim about {overBudgetAmount:C} from {leadingRisk?.Category ?? "your highest category"} to pull the forecast back under budget."
                : budgetAdvisor.TotalBudget <= 0m
                    ? "Create a budget ceiling so forecast coaching can become more precise."
                    : $"You still have {budgetAdvisor.RemainingBudget:C} of budget headroom if pacing stays stable.";

            return new AiBudgetForecastDto
            {
                ProjectedSpend = RoundCurrency(budgetAdvisor.ProjectedSpend),
                RemainingBudget = RoundCurrency(budgetAdvisor.RemainingBudget),
                OverBudgetAmount = RoundCurrency(overBudgetAmount),
                LeadingRiskCategory = leadingRisk?.Category ?? "N/A",
                BudgetRunwayDate = runwayDate,
                CutSuggestion = cutSuggestion
            };
        }

        private static List<AiVendorRuleSuggestionDto> BuildVendorRuleSuggestions(
            IReadOnlyCollection<Receipt> receipts,
            IReadOnlyCollection<Category> categories,
            IReadOnlyCollection<VendorCategoryRule> rules)
        {
            return receipts
                .Where(receipt =>
                    !string.IsNullOrWhiteSpace(receipt.Vendor) &&
                    !string.IsNullOrWhiteSpace(receipt.Category) &&
                    !receipt.Category.Equals("Uncategorized", StringComparison.OrdinalIgnoreCase))
                .GroupBy(receipt => receipt.Vendor!.Trim(), StringComparer.OrdinalIgnoreCase)
                .Select(group =>
                {
                    var topCategory = group
                        .GroupBy(receipt => receipt.Category!, StringComparer.OrdinalIgnoreCase)
                        .OrderByDescending(categoryGroup => categoryGroup.Count())
                        .FirstOrDefault();
                    if (topCategory == null || group.Count() < 2)
                    {
                        return null;
                    }

                    var confidence = (decimal)topCategory.Count() / group.Count();
                    if (confidence < 0.75m)
                    {
                        return null;
                    }

                    var normalizedPattern = group.Key.Trim();
                    var category = categories.FirstOrDefault(item =>
                        item.Name.Equals(topCategory.Key, StringComparison.OrdinalIgnoreCase));
                    if (category == null)
                    {
                        return null;
                    }

                    var existingRule = rules.Any(rule =>
                        rule.VendorPattern.Equals(normalizedPattern, StringComparison.OrdinalIgnoreCase) ||
                        normalizedPattern.Contains(rule.VendorPattern, StringComparison.OrdinalIgnoreCase));
                    if (existingRule)
                    {
                        return null;
                    }

                    return new AiVendorRuleSuggestionDto
                    {
                        VendorPattern = normalizedPattern,
                        VendorLabel = group.Key,
                        CategoryId = category.Id,
                        CategoryName = category.Name,
                        Confidence = Math.Round(confidence, 2, MidpointRounding.AwayFromZero),
                        Reason = $"{topCategory.Count()} of {group.Count()} receipts from this vendor already land in {category.Name}.",
                        MatchCount = group.Count(),
                        ExistingRule = false
                    };
                })
                .Where(suggestion => suggestion != null)
                .Cast<AiVendorRuleSuggestionDto>()
                .OrderByDescending(suggestion => suggestion.Confidence)
                .ThenByDescending(suggestion => suggestion.MatchCount)
                .Take(4)
                .ToList();
        }

        private static List<AiMonthlySummaryDto> BuildMonthlySummaries(
            IReadOnlyCollection<Receipt> monthReceipts,
            IReadOnlyCollection<Receipt> previousMonthReceipts,
            IReadOnlyList<AiSubscriptionInsightDto> subscriptions,
            string topCategory,
            DateTime now)
        {
            var summaries = new List<AiMonthlySummaryDto>();
            var currentTotal = RoundCurrency(monthReceipts.Sum(receipt => receipt.TotalAmount));
            var previousTotal = RoundCurrency(previousMonthReceipts.Sum(receipt => receipt.TotalAmount));
            var delta = currentTotal - previousTotal;
            var direction = delta switch
            {
                > 0m => "more",
                < 0m => "less",
                _ => "the same as"
            };

            summaries.Add(new AiMonthlySummaryDto
            {
                Title = "Month in review",
                PeriodLabel = now.ToString("MMMM yyyy", CultureInfo.InvariantCulture),
                Summary = previousTotal <= 0m
                    ? $"You have tracked {currentTotal:C} so far this month."
                    : $"You have spent {Math.Abs(delta):C} {direction} last month, with {topCategory} leading the mix."
            });

            var topVendors = monthReceipts
                .Where(receipt => !string.IsNullOrWhiteSpace(receipt.Vendor))
                .GroupBy(receipt => receipt.Vendor!, StringComparer.OrdinalIgnoreCase)
                .OrderByDescending(group => group.Sum(item => item.TotalAmount))
                .Take(3)
                .Select(group => group.Key)
                .ToList();

            summaries.Add(new AiMonthlySummaryDto
            {
                Title = "Top vendors",
                PeriodLabel = now.ToString("MMM", CultureInfo.InvariantCulture),
                Summary = topVendors.Count == 0
                    ? "Upload a few more receipts to surface your strongest vendor patterns."
                    : $"Your top vendors this month are {JoinLabels(topVendors)}."
            });

            var dueSoon = subscriptions
                .Where(item => item.NextExpectedDate.HasValue && item.NextExpectedDate.Value <= DateTime.UtcNow.AddDays(7))
                .ToList();

            summaries.Add(new AiMonthlySummaryDto
            {
                Title = "Upcoming recurring charges",
                PeriodLabel = "Next 7 days",
                Summary = dueSoon.Count == 0
                    ? "No recurring charges are predicted in the next week."
                    : $"{dueSoon.Count} recurring charge{(dueSoon.Count == 1 ? string.Empty : "s")} may hit soon, led by {dueSoon[0].Vendor}."
            });

            return summaries;
        }

        private static List<AiCoachTipDto> BuildCoachTips(
            AiBudgetForecastDto forecast,
            IReadOnlyList<AiVendorRuleSuggestionDto> vendorRuleSuggestions,
            IReadOnlyList<AiSubscriptionInsightDto> subscriptions,
            IReadOnlyList<AiCopilotAlertDto> duplicateAlerts,
            int receiptCount)
        {
            var tips = new List<AiCoachTipDto>();

            if (forecast.OverBudgetAmount > 0m)
            {
                tips.Add(new AiCoachTipDto
                {
                    Title = "Protect runway",
                    Detail = forecast.CutSuggestion,
                    Tone = "warning"
                });
            }

            var priceHikes = subscriptions.Where(item => item.PriceChangeDirection == "up").ToList();
            if (priceHikes.Count > 0)
            {
                tips.Add(new AiCoachTipDto
                {
                    Title = "Review rising subscriptions",
                    Detail = $"{priceHikes.Count} recurring vendor{(priceHikes.Count == 1 ? string.Empty : "s")} show a recent price increase.",
                    Tone = "warning"
                });
            }

            if (vendorRuleSuggestions.Count > 0)
            {
                tips.Add(new AiCoachTipDto
                {
                    Title = "Automate categorization",
                    Detail = $"Create {vendorRuleSuggestions[0].VendorLabel} -> {vendorRuleSuggestions[0].CategoryName} to reduce future cleanup.",
                    Tone = "positive"
                });
            }

            if (duplicateAlerts.Count > 0)
            {
                tips.Add(new AiCoachTipDto
                {
                    Title = "Check duplicate activity",
                    Detail = duplicateAlerts[0].Detail,
                    Tone = "warning"
                });
            }

            if (receiptCount < 6)
            {
                tips.Add(new AiCoachTipDto
                {
                    Title = "Feed the model",
                    Detail = "Upload a few more receipts this month so the assistant can sharpen trend detection and search results.",
                    Tone = "default"
                });
            }

            return tips.Take(4).ToList();
        }

        private static List<AiCopilotAlertDto> BuildDuplicateAlerts(IReadOnlyCollection<Receipt> receipts)
        {
            return receipts
                .Where(receipt =>
                    !string.IsNullOrWhiteSpace(receipt.Vendor) &&
                    receipt.TotalAmount > 0m)
                .GroupBy(receipt => $"{NormalizeText(receipt.Vendor!)}|{receipt.TotalAmount:F2}|{receipt.UploadedAt:yyyy-MM-dd}")
                .Where(group => group.Count() > 1)
                .Select(group =>
                {
                    var first = group.First();
                    return new AiCopilotAlertDto
                    {
                        Title = $"Possible duplicate: {first.Vendor}",
                        Detail = $"{group.Count()} receipts for {first.TotalAmount:C} landed on {first.UploadedAt:MMM d}. Review whether one upload is a duplicate.",
                        Severity = "warning"
                    };
                })
                .Take(2)
                .ToList();
        }

        private static List<AiCopilotAlertDto> BuildCategorySpikeAlerts(
            IReadOnlyCollection<Receipt> receipts,
            DateTime monthStart)
        {
            var previousStart = monthStart.AddMonths(-3);
            var currentMonth = receipts
                .Where(receipt => receipt.UploadedAt >= monthStart && !string.IsNullOrWhiteSpace(receipt.Category))
                .GroupBy(receipt => receipt.Category!, StringComparer.OrdinalIgnoreCase)
                .ToDictionary(
                    group => group.Key,
                    group => RoundCurrency(group.Sum(item => item.TotalAmount)),
                    StringComparer.OrdinalIgnoreCase);

            var historical = receipts
                .Where(receipt =>
                    receipt.UploadedAt >= previousStart &&
                    receipt.UploadedAt < monthStart &&
                    !string.IsNullOrWhiteSpace(receipt.Category))
                .GroupBy(receipt => new { receipt.Category, Month = new DateTime(receipt.UploadedAt.Year, receipt.UploadedAt.Month, 1) })
                .Select(group => new
                {
                    Category = group.Key.Category!,
                    Total = RoundCurrency(group.Sum(item => item.TotalAmount))
                })
                .GroupBy(item => item.Category, StringComparer.OrdinalIgnoreCase)
                .ToDictionary(
                    group => group.Key,
                    group => group.Average(item => item.Total),
                    StringComparer.OrdinalIgnoreCase);

            return currentMonth
                .Where(item => historical.TryGetValue(item.Key, out var average) && average > 0m && item.Value > average * 1.5m && item.Value - average >= 40m)
                .OrderByDescending(item => item.Value)
                .Take(2)
                .Select(item => new AiCopilotAlertDto
                {
                    Title = $"{item.Key} spike detected",
                    Detail = $"{item.Key} is running at {item.Value:C} this month versus a recent average of {historical[item.Key]:C}.",
                    Severity = "warning"
                })
                .ToList();
        }
    }
}
