import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Budget } from '../../../models';
import { LocalePreferenceService } from '../../../services/locale-preference.service';

@Component({
  selector: 'app-budget-edit-dialog',
  templateUrl: './budget-edit-dialog.component.html',
  styleUrls: ['./budget-edit-dialog.component.scss']
})
export class BudgetEditDialogComponent {
  category: string;
  private amountBase: number;
  amountInput: number | null;

  constructor(
    public dialogRef: MatDialogRef<BudgetEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { budget?: Budget },
    public localePreference: LocalePreferenceService,
  ) {
    this.category = data.budget?.category || '';
    this.amountBase = data.budget?.amount || 0;
    this.amountInput = this.toLocalizedAmount(this.amountBase);
  }

  save() {
    this.amountBase = this.localePreference.convertToBase(this.amountInput);

    this.dialogRef.close({
      category: this.category,
      amount: this.amountBase,
    });
  }

  close() {
    this.dialogRef.close();
  }

  private toLocalizedAmount(amountBase: number): number {
    return Number(
      this.localePreference.convertFromBase(amountBase).toFixed(2),
    );
  }
}
