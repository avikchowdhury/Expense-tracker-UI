export interface AuthResponse {
  token: string;
  refreshToken: string;
  expiresAt: string;
}

export type AppUserRole = 'Admin' | 'User';

export interface PaginatedResponse<T> {
  total: number;
  data: T[];
}

export interface ReceiptDto {
  id: number;
  userId: number;
  uploadedAt: string;
  fileName: string;
  blobUrl?: string;
  totalAmount: number;
  vendor?: string;
  category?: string;
  parsedContentJson?: string;
}

export interface ReceiptQueryParams {
  page?: number;
  pageSize?: number;
  search?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface ReceiptAiParseResult {
  vendor?: string;
  amount?: number;
  category?: string;
  date?: string;
  rawText?: string;
}

export interface MonthlySpendingItem {
  month: string;
  total: number;
}

export interface CategorySpendItem {
  category: string;
  total: number;
}

export interface BudgetStatus {
  budget: number;
  spent: number;
  status: 'ok' | 'warning' | 'over';
  message: string;
}

export interface Budget {
  id: number;
  period: string;
  category: string;
  amount: number;
  lastReset?: string;
}

export interface OtpRequest {
  email: string;
}

export interface OtpSendResponse {
  message: string;
  deliveryMode?: 'email' | 'development';
  developmentOtp?: string;
}

export interface OtpVerifyRequest {
  email: string;
  otp: string;
  password: string;
}

export interface AiInsight {
  title: string;
  summary: string;
  severity: 'positive' | 'warning' | 'critical' | 'info';
  metricLabel?: string;
  metricValue?: string;
  action?: string;
}

export interface AiInsightSnapshot {
  generatedAt: string;
  budgetHealth: string;
  monthSpend: number;
  recentAverage: number;
  topCategory: string;
  anomalies: string[];
  suggestions: string[];
  insights: AiInsight[];
}

export interface AiChatRequest {
  message: string;
}

export interface AiChatResponse {
  reply: string;
  suggestions: string[];
  referencedMetrics: string[];
  generatedAt: string;
}

export interface AiChatMessage {
  role: 'user' | 'assistant';
  content: string;
  createdAt?: string;
}

export interface AdminOverview {
  totalUsers: number;
  adminCount: number;
  standardUserCount: number;
  receiptCount: number;
  trackedReceiptSpend: number;
}

export interface AdminUserSummary {
  id: number;
  email: string;
  role: AppUserRole;
  avatarUrl?: string;
  receiptCount: number;
  budgetCount: number;
  categoryCount: number;
  latestReceiptAt?: string;
}
