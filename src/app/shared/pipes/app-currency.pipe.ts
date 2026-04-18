import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalePreferenceService } from '../../services/locale-preference.service';

@Pipe({
  name: 'appCurrency',
  pure: false,
})
export class AppCurrencyPipe implements PipeTransform, OnDestroy {
  private readonly subscription: Subscription;

  constructor(
    private localePreference: LocalePreferenceService,
    private cdr: ChangeDetectorRef,
  ) {
    this.subscription = this.localePreference.preference$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  transform(
    value: number | string | null | undefined,
    digitsInfo = '1.2-2',
  ): string {
    return this.localePreference.formatCurrency(value, digitsInfo);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
