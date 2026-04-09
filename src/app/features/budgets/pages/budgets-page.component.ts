import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, forkJoin, of } from 'rxjs';
import { Budget, BudgetAdvisorSnapshot } from '../../../models';
import { AiAssistantService } from '../../../services/ai-assistant.service';
import { BudgetService } from '../../../services/budget.service';
import { NotificationService } from '../../../services/notification.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog.component';
import { BudgetEditDialogComponent } from '../components/budget-edit-dialog.component';

@Component({
  selector: 'app-budgets-page',
  templateUrl: './budgets-page.component.html',
  styleUrls: ['./budgets-page.component.scss'],
})
export class BudgetsPageComponent implements OnInit {
  budgets: Budget[] = [];
  advisor: BudgetAdvisorSnapshot | null = null;
  loading = false;

  // AI Budget Coach
  coachPrompt = '';
  coachResponse = '';
  coachThinking = false;
  coachExpanded = false;

  readonly coachGoals = [
    'Give me a 3-step plan to stay under my budget this month.',
    'Which category should I cut first to save the most?',
    'How much can I realistically save by end of month?',
    'Which budget limits should I adjust based on my spending trends?',
    'Am I at risk of going over budget this month?',
  ];

  constructor(
    private budgetService: BudgetService,
    private aiService: AiAssistantService,
    private dialog: MatDialog,
    private notification: NotificationService,
  ) {}

  ngOnInit() {
    this.loadBudgetWorkspace();
  }

  get activeBudgetCount(): number {
    return this.budgets.length;
  }

  get totalBudgetAmount(): number {
    return this.budgets.reduce(
      (total, budget) => total + (Number(budget.amount) || 0),
      0,
    );
  }

  get trackedCategoryCount(): number {
    return new Set(
      this.budgets
        .map((budget) => budget.category?.trim())
        .filter((category): category is string => !!category),
    ).size;
  }

  get projectedSpend(): number {
    return this.advisor?.projectedSpend ?? 0;
  }

  get atRiskCategoryCount(): number {
    return (
      this.advisor?.categories.filter(
        (category) =>
          category.riskLevel === 'warning' || category.riskLevel === 'critical',
      ).length ?? 0
    );
  }

  loadBudgetWorkspace() {
    this.loading = true;
    forkJoin({
      budgets: this.budgetService.getBudgets(),
      advisor: this.budgetService.getBudgetAdvisor().pipe(
        catchError(() => {
          this.notification.error('Budget advisor is unavailable right now');
          return of(null);
        }),
      ),
    }).subscribe({
      next: ({ budgets, advisor }) => {
        this.budgets = budgets.map((item: any) => this.mapBudget(item));
        this.advisor = advisor;
        this.loading = false;
      },
      error: () => {
        this.notification.error('Failed to load budgets');
        this.loading = false;
      },
    });
  }

  private mapBudget(item: any): Budget {
    return {
      id: item.id,
      period: item.lastReset ? item.lastReset.slice(0, 7) : '',
      category: item.category,
      amount: item.monthlyLimit,
      lastReset: item.lastReset,
    };
  }

  askCoach(goal?: string): void {
    const message = (goal ?? this.coachPrompt).trim();
    if (!message || this.coachThinking) return;

    if (!goal) this.coachPrompt = '';
    this.coachExpanded = true;
    this.coachThinking = true;
    this.coachResponse = '';

    const context = this.advisor
      ? `My current budget: $${this.advisor.totalBudget.toFixed(0)} total, $${this.advisor.currentSpend.toFixed(0)} spent, projected $${this.advisor.projectedSpend.toFixed(0)}. At-risk categories: ${this.atRiskCategoryCount}. `
      : '';

    this.aiService.sendMessage({ message: context + message }).subscribe({
      next: (res) => {
        this.coachResponse = res.reply;
        this.coachThinking = false;
      },
      error: () => {
        this.coachResponse =
          'Could not reach the AI right now. Please try again.';
        this.coachThinking = false;
      },
    });
  }

  // Add Budget
  addBudget() {
    const dialogRef = this.dialog.open(BudgetEditDialogComponent, {
      width: '400px',
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.category && result.amount) {
        this.budgetService
          .addBudget({
            period: new Date().toISOString().slice(0, 7), // e.g., '2026-03'
            category: result.category,
            amount: result.amount,
          })
          .subscribe({
            next: () => {
              this.notification.success('Budget added');
              this.loadBudgetWorkspace();
            },
            error: () => this.notification.error('Failed to add budget'),
          });
      }
    });
  }

  editBudget(budget: Budget) {
    const dialogRef = this.dialog.open(BudgetEditDialogComponent, {
      width: '400px',
      data: { budget },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.category && result.amount !== undefined) {
        this.budgetService
          .updateBudget(budget.id, {
            category: result.category,
            amount: result.amount,
            lastReset: budget.lastReset, // preserve lastReset
          })
          .subscribe({
            next: () => {
              this.notification.success('Budget updated');
              this.loadBudgetWorkspace();
            },
            error: () => this.notification.error('Failed to update budget'),
          });
      }
    });
  }

  deleteBudget(budget: Budget) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Budget',
        message: 'Are you sure you want to delete this budget?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.budgetService.deleteBudget(budget.id).subscribe({
          next: () => {
            this.notification.success('Budget deleted');
            this.loadBudgetWorkspace();
          },
          error: () => this.notification.error('Failed to delete budget'),
        });
      }
    });
  }
}
