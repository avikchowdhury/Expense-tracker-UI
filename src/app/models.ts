export interface AuthResponse {
  token: string;
  refreshToken: string;
  expiresAt: string;
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
