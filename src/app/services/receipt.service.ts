// ...existing code...

// ...existing code...

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ReceiptDto } from '../models';

const API_BASE = 'http://localhost:5033/api';

@Injectable({ providedIn: 'root' })
export class ReceiptService {
  constructor(private http: HttpClient) {}

  updateReceipt(id: number, data: Partial<ReceiptDto>): Observable<ReceiptDto> {
    return this.http.put<ReceiptDto>(`${API_BASE}/receipts/${id}`, data);
  }

  deleteReceipt(id: number): Observable<any> {
    return this.http.delete(`${API_BASE}/receipts/${id}`);
  }

  parseReceiptAI(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${API_BASE}/ai/parse-receipt`, formData);
  }

  uploadReceipt(file: File): Observable<ReceiptDto> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ReceiptDto>(`${API_BASE}/receipts`, formData);
  }

  getReceipts(): Observable<{ total: number; data: ReceiptDto[] }> {
    return this.http.get<{ total: number; data: ReceiptDto[] }>(`${API_BASE}/receipts`);
  }

  getRecentReceipts(limit: number = 5): Observable<ReceiptDto[]> {
    return this.http.get<ReceiptDto[]>(`${API_BASE}/receipts?limit=${limit}`);
  }
}
