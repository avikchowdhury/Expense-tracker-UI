import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LocalePreferenceService } from './locale-preference.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private auth: AuthService,
    private localePreference: LocalePreferenceService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    const preference = this.localePreference.currentPreference;
    const headers: Record<string, string> = {
      'X-Display-Locale': preference.locale,
      'X-Display-Currency': preference.currencyCode,
      'X-Display-Exchange-Rate': preference.usdExchangeRate.toString(),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return next.handle(
      req.clone({
        setHeaders: headers,
      }),
    );
  }
}
