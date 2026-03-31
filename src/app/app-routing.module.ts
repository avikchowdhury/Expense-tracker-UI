import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard.component';
import { ReceiptsComponent } from './pages/receipts.component';
import { BudgetsComponent } from './pages/budgets.component';
import { CategoriesComponent } from './pages/categories.component';
import { ProfileComponent } from './pages/profile.component';
import { AuthComponent } from './pages/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'receipts', component: ReceiptsComponent },
  { path: 'budgets', component: BudgetsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
