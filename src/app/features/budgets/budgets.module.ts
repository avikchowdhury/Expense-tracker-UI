import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BudgetAiAdvisorComponent } from './components/budget-ai-advisor.component';
import { BudgetEditDialogComponent } from './components/budget-edit-dialog.component';
import { BudgetListPanelComponent } from './components/budget-list-panel.component';
import { BudgetWatchlistComponent } from './components/budget-watchlist.component';
import { BudgetsPageComponent } from './pages/budgets-page.component';
import { BudgetsRoutingModule } from './budgets-routing.module';

@NgModule({
  declarations: [
    BudgetsPageComponent,
    BudgetEditDialogComponent,
    BudgetAiAdvisorComponent,
    BudgetWatchlistComponent,
    BudgetListPanelComponent
  ],
  imports: [SharedModule, BudgetsRoutingModule]
})
export class BudgetsModule {}
