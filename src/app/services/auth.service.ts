import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models';

const API_BASE = 'http://localhost:5033/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_BASE}/auth/register`, { email, password });
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_BASE}/auth/login`, { email, password });
  }

  saveToken(data: AuthResponse): void {
    localStorage.setItem('exp_tracker_token', data.token);
    localStorage.setItem('exp_tracker_expires_at', data.expiresAt);
  }

  getToken(): string | null {
    return localStorage.getItem('exp_tracker_token');
  }

  clearToken(): void {
    localStorage.removeItem('exp_tracker_token');
    localStorage.removeItem('exp_tracker_expires_at');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const expiresAt = localStorage.getItem('exp_tracker_expires_at');
    if (!expiresAt) {
      return false;
    }
    return new Date(expiresAt) > new Date();
  }
}
