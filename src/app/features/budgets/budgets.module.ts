import { NgModule } from '@angular/core';
import { BudgetEditDialogComponent } from '../../pages/budget-edit-dialog.component';
import { BudgetsComponent } from '../../pages/budgets.component';
import { ConfirmDialogComponent } from '../../pages/confirm-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { BudgetsRoutingModule } from './budgets-routing.module';

@NgModule({
  declarations: [BudgetsComponent, BudgetEditDialogComponent, ConfirmDialogComponent],
  imports: [SharedModule, BudgetsRoutingModule]
})
export class BudgetsModule {}
