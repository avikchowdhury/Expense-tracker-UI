import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { AiChatPanelComponent } from './components/ai-chat-panel.component';
import { AiInsightsPanelComponent } from './components/ai-insights-panel.component';
import { CategoryBreakdownCardComponent } from './components/category-breakdown-card.component';
import { DashboardSummaryComponent } from './components/dashboard-summary.component';
import { RecentReceiptsCardComponent } from './components/recent-receipts-card.component';
import { SpendingTrendCardComponent } from './components/spending-trend-card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardSummaryComponent,
    SpendingTrendCardComponent,
    CategoryBreakdownCardComponent,
    RecentReceiptsCardComponent,
    AiInsightsPanelComponent,
    AiChatPanelComponent
  ],
  imports: [SharedModule, DashboardRoutingModule]
})
export class DashboardModule {}
