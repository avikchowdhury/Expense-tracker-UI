import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget, BudgetAdvisorSnapshot } from '../models';

export interface BudgetStatus {
  budget: number;
  spent: number;
  status: 'ok' | 'warning' | 'over';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  constructor(private http: HttpClient) {}

  getBudgetStatus(): Observable<BudgetStatus> {
    return this.http.get<BudgetStatus>('/api/budget/status');
  }

  getBudgetAdvisor(): Observable<BudgetAdvisorSnapshot> {
    return this.http.get<BudgetAdvisorSnapshot>('/api/budgets/advisor');
  }

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>('/api/budgets');
  }

  addBudget(
    budget: { period: string; category: string; amount: number },
  ): Observable<Budget> {
    // Map 'amount' to 'MonthlyLimit' for backend
    const payload = {
      category: budget.category,
      MonthlyLimit: budget.amount,
      period: budget.period
    };
    return this.http.post<Budget>('/api/budgets', payload);
  }

  updateBudget(
    id: number,
    budget: { category: string; amount: number; lastReset?: string },
  ): Observable<Budget> {
    // Map 'amount' to 'MonthlyLimit' for backend, and include lastReset if present
    const payload: any = {
      category: budget.category,
      MonthlyLimit: budget.amount
    };
    if (budget.lastReset) {
      payload.lastReset = budget.lastReset;
    }
    return this.http.put<Budget>(`/api/budgets/${id}`, payload);
  }

  deleteBudget(id: number): Observable<any> {
    return this.http.delete(`/api/budgets/${id}`);
  }
}
