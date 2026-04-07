import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AiChatRequest, AiChatResponse, AiInsightSnapshot } from '../models';

const API_BASE = '/api';

@Injectable({ providedIn: 'root' })
export class AiAssistantService {
  constructor(private http: HttpClient) {}

  getInsights(): Observable<AiInsightSnapshot> {
    return this.http.get<AiInsightSnapshot>(`${API_BASE}/ai/insights`);
  }

  sendMessage(payload: AiChatRequest): Observable<AiChatResponse> {
    return this.http.post<AiChatResponse>(`${API_BASE}/ai/chat`, payload);
  }
}
