import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalePreferenceService } from '../../services/locale-preference.service';

@Pipe({
  name: 'appDate',
  pure: false,
})
export class AppDatePipe implements PipeTransform, OnDestroy {
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
    value: string | number | Date | null | undefined,
    format: string = 'mediumDate',
  ): string {
    return this.localePreference.formatDate(value, format);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
