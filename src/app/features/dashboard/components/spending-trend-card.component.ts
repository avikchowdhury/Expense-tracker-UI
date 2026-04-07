import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-spending-trend-card',
  templateUrl: './spending-trend-card.component.html',
  styleUrls: ['./spending-trend-card.component.scss']
})
export class SpendingTrendCardComponent {
  @Input() data: ChartData<'bar'> = { labels: [], datasets: [] };
  @Input() options: ChartConfiguration['options'] = {};
  @Input() type: ChartType = 'bar';
}
