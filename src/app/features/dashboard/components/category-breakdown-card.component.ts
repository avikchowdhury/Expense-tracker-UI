import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-category-breakdown-card',
  templateUrl: './category-breakdown-card.component.html',
  styleUrls: ['./category-breakdown-card.component.scss']
})
export class CategoryBreakdownCardComponent {
  @Input() data: ChartData<'doughnut'> = { labels: [], datasets: [] };
  @Input() type: ChartType = 'doughnut';
  @Input() topCategory = 'N/A';
}
