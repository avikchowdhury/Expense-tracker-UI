import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
import { AuthService } from './services/auth.service';
import { ReceiptService } from './services/receipt.service';
import { CategorySpendItem, MonthlySpendingItem, ReceiptDto } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  aiParseResult: any = null;
  aiParseError: string = '';
  title = 'AI Expense Tracker';
  math = Math;

  email = '';
  password = '';
  authError = '';
  isAuthenticated = false;

  uploadFile?: File;
  isUploading = false;
  uploadMessage = '';

  receipts: ReceiptDto[] = [];
  monthlySpending: MonthlySpendingItem[] = [];
  categorySpend: CategorySpendItem[] = [];

  constructor(
    private auth: AuthService,
    private receiptService: ReceiptService,
    private analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.auth.isAuthenticated();
    if (this.isAuthenticated) {
      this.loadData();
    }
  }

  register(): void {
    this.authError = '';
    this.auth.register(this.email, this.password).subscribe({
      next: result => {
        this.auth.saveToken(result);
        this.isAuthenticated = true;
        this.loadData();
      },
      error: err => {
        this.authError = err?.error?.message || 'Registration failed';
      }
    });
  }

  login(): void {
    this.authError = '';
    this.auth.login(this.email, this.password).subscribe({
      next: result => {
        this.auth.saveToken(result);
        this.isAuthenticated = true;
        this.loadData();
      },
      error: err => {
        this.authError = err?.error?.message || 'Login failed';
      }
    });
  }

  logout(): void {
    this.auth.clearToken();
    this.isAuthenticated = false;
    this.receipts = [];
    this.monthlySpending = [];
    this.categorySpend = [];
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.uploadFile = input.files[0];
        this.aiParseResult = null;
        this.aiParseError = '';
        // Call AI parse for preview
        this.receiptService.parseReceiptAI(this.uploadFile).subscribe({
          next: result => {
            this.aiParseResult = result;
          },
          error: err => {
            this.aiParseError = err?.error || 'AI parsing failed';
          }
        });
    }
  }

  uploadReceipt(): void {
    if (!this.uploadFile) {
      this.uploadMessage = 'Select a receipt file first.';
      return;
    }

    this.isUploading = true;
    this.uploadMessage = '';

    this.receiptService.uploadReceipt(this.uploadFile).subscribe({
      next: saved => {
        this.uploadMessage = `Uploaded ${saved.fileName} (amount: ${saved.totalAmount})`;
        this.uploadFile = undefined;
        const inputEl = document.getElementById('fileInput') as HTMLInputElement | null;
        if (inputEl) { inputEl.value = ''; }
        this.loadData();
      },
      error: err => {
        this.uploadMessage = err?.error || 'Upload failed';
      },
      complete: () => {
        this.isUploading = false;
      }
    });
  }

  loadData(): void {
    this.receiptService.getReceipts().subscribe({
      next: receipts => this.receipts = receipts.data,
      error: () => { this.authError = 'Failed to load receipts'; }
    });

    this.analyticsService.getMonthlySpendings().subscribe({
      next: data => this.monthlySpending = data,
      error: () => { /* ignore */ }
    });

    this.analyticsService.getCategoryBreakdown().subscribe({
      next: data => this.categorySpend = data,
      error: () => { /* ignore */ }
    });
  }

  topCategory(): string {
    if (!this.categorySpend.length) return 'N/A';
    return this.categorySpend.sort((a, b) => b.total - a.total)[0].category;
  }
}
