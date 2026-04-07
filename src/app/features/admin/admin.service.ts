import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminOverview, AdminUserSummary, AppUserRole } from '../../models';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly apiUrl = '/api/admin';

  constructor(private http: HttpClient) {}

  getOverview(): Observable<AdminOverview> {
    return this.http.get<AdminOverview>(`${this.apiUrl}/overview`);
  }

  getUsers(): Observable<AdminUserSummary[]> {
    return this.http.get<AdminUserSummary[]>(`${this.apiUrl}/users`);
  }

  updateUserRole(
    userId: number,
    role: AppUserRole,
  ): Observable<AdminUserSummary> {
    return this.http.put<AdminUserSummary>(`${this.apiUrl}/users/${userId}/role`, {
      role,
    });
  }
}
