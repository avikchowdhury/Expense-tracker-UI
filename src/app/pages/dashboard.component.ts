import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { AnalyticsService } from '../services/analytics.service';
import { ReceiptService } from '../services/receipt.service';
import { BudgetService } from '../services/budget.service';
import { CategorySpendItem, MonthlySpendingItem, ReceiptDto, BudgetStatus } from '../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Monthly Spending Chart
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = { labels: [], datasets: [{ data: [], label: 'Spending' }] };

  // Category Breakdown Chart
  public pieChartType: ChartType = 'pie';
  public pieChartData: ChartData<'pie'> = { labels: [], datasets: [{ data: [] }] };


  // Top Category
  public topCategory: string = 'N/A';

  // Recent Receipts
  public recentReceipts: ReceiptDto[] = [];

  // Budget Status
  public budgetStatus: BudgetStatus | null = null;

  constructor(
    private analytics: AnalyticsService,
    private receipts: ReceiptService,
    private budget: BudgetService
  ) {}

  ngOnInit(): void {
    this.analytics.getMonthlySpendings(6).subscribe(data => {
      this.barChartData = {
        labels: data.map(x => x.month),
        datasets: [{ data: data.map(x => x.total), label: 'Spending' }]
      };
    });
    this.analytics.getCategoryBreakdown().subscribe(data => {
      this.pieChartData = {
        labels: data.map(x => x.category),
        datasets: [{ data: data.map(x => x.total) }]
      };
      this.topCategory = data.length ? data.reduce((a, b) => a.total > b.total ? a : b).category : 'N/A';
    });
    this.receipts.getRecentReceipts(5).subscribe(data => {
      this.recentReceipts = data;
    });
    this.budget.getBudgetStatus().subscribe(data => {
      this.budgetStatus = data;
    });
  }
}
