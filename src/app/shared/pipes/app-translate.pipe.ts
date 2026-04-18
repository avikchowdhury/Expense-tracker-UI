import {
  ChangeDetectorRef,
  OnDestroy,
  Pipe,
  PipeTransform,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalePreferenceService } from '../../services/locale-preference.service';

@Pipe({
  name: 'appTranslate',
  pure: false,
})
export class AppTranslatePipe implements PipeTransform, OnDestroy {
  private readonly subscription: Subscription;

  constructor(
    private localePreference: LocalePreferenceService,
    private cdr: ChangeDetectorRef,
  ) {
    this.subscription = this.localePreference.preference$.subscribe(() => {
      this.cdr.markForCheck();
    });
  }

  transform(key: string, fallback?: string): string {
    return this.localePreference.translate(key, fallback);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
