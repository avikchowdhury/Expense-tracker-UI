import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Category, CategoryService } from '../services/category.service';
import { AiAssistantService } from '../services/ai-assistant.service';
import { NotificationService } from '../services/notification.service';
import { ReceiptService } from '../services/receipt.service';
import { LocalePreferenceService } from '../services/locale-preference.service';
import { AppConstants } from '../shared/app-constants';

@Component({
  selector: 'app-quick-add-expense-dialog',
  templateUrl: './quick-add-expense-dialog.component.html',
  styleUrls: ['./quick-add-expense-dialog.component.scss'],
})
export class QuickAddExpenseDialogComponent implements OnInit {
  categories: Category[] = [];
  text = '';
  parsing = false;
  saving = false;
  vendor = '';
  category = AppConstants.UNCATEGORIZED;
  date = new Date().toISOString().slice(0, 10);
  parsedCurrency: 'INR' | 'USD' | null = null;
  private amountBase: number | null = null;

  constructor(
    private dialogRef: MatDialogRef<QuickAddExpenseDialogComponent>,
    private aiService: AiAssistantService,
    private receiptService: ReceiptService,
    private categoryService: CategoryService,
    private notification: NotificationService,
    public localePreference: LocalePreferenceService,
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
    });
  }

  parse(): void {
    if (!this.text.trim() || this.parsing) {
      return;
    }

    this.parsing = true;
    this.parsedCurrency = null;
    this.aiService.parseTextExpense(this.text.trim()).subscribe({
      next: (result) => {
        this.vendor = result.vendor || '';
        this.amountBase = result.amount || null;
        this.category = result.category || AppConstants.UNCATEGORIZED;
        this.categories = result.category
          ? [
              ...new Set([
                result.category,
                ...this.categories.map((c) => c.name),
              ]),
            ].map((name) => ({ id: 0, name }))
          : this.categories;
        this.date = result.date || new Date().toISOString().slice(0, 10);
        this.parsedCurrency = result.detectedCurrency ?? null;
        this.parsing = false;
      },
      error: () => {
        this.notification.error(AppConstants.PARSE_ERROR, AppConstants.QUICK_ADD);
        this.parsing = false;
      },
    });
  }

  save(): void {

    if (
      !this.vendor.trim() ||
      !this.amountBase ||
      this.amountBase <= 0 ||
      this.saving
    ) {
      return;
    }

    this.saving = true;
    this.receiptService
      .quickAddReceipt(
        this.vendor.trim(),
        this.amountBase,
        this.category || AppConstants.UNCATEGORIZED,
        this.date,
      )
      .subscribe({
        next: () => {
          this.aiService.invalidateInsightCache();
          this.notification.success(AppConstants.SAVE_SUCCESS, AppConstants.QUICK_ADD);
          this.saving = false;
          this.dialogRef.close(true);
        },
        error: () => {
          this.notification.error(AppConstants.SAVE_ERROR, AppConstants.QUICK_ADD);
          this.saving = false;
        },
      });
  }

  close(): void {
    this.dialogRef.close(false);
  }

  get parsedCurrencyLabel(): string {
    if (!this.parsedCurrency) {
      return '';
    }
    return this.parsedCurrency === 'INR'
      ? AppConstants.PARSED_INR
      : AppConstants.PARSED_USD;
  }

  get amount(): number | null {
    if (this.amountBase === null) {
      return null;
    }

    return this.localePreference.convertFromBase(this.amountBase);
  }

  set amount(value: number | string | null) {
    if (value === null || value === '' || value === undefined) {
      this.amountBase = null;
      return;
    }

    this.amountBase = this.localePreference.convertToBase(value);
  }
}
