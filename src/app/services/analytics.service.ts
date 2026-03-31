import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorySpendItem, MonthlySpendingItem } from '../models';

const API_BASE = 'http://localhost:5033/api';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private http: HttpClient) {}

  private getAuthHeaders(): { headers: HttpHeaders } {
    const token = localStorage.getItem('exp_tracker_token');
    const headers = new HttpHeaders({
      Authorization: token ? `Bearer ${token}` : ''
    });
    return { headers };
  }

  getMonthlySpendings(months: number = 6): Observable<MonthlySpendingItem[]> {
    return this.http.get<MonthlySpendingItem[]>(`${API_BASE}/analytics/monthly?months=${months}`, this.getAuthHeaders());
  }

  getCategoryBreakdown(): Observable<CategorySpendItem[]> {
    return this.http.get<CategorySpendItem[]>(`${API_BASE}/analytics/category`, this.getAuthHeaders());
  }
}
