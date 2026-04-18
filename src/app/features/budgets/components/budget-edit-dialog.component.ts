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

  constructor(
    public dialogRef: MatDialogRef<BudgetEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { budget?: Budget },
    public localePreference: LocalePreferenceService,
  ) {
    this.category = data.budget?.category || '';
    this.amountBase = data.budget?.amount || 0;
  }

  save() {
    this.dialogRef.close({
      category: this.category,
      amount: this.amountBase,
    });
  }

  close() {
    this.dialogRef.close();
  }

  get amount(): number {
    return this.localePreference.convertFromBase(this.amountBase);
  }

  set amount(value: number | string) {
    this.amountBase = this.localePreference.convertToBase(value);
  }
}
