import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface NavigationItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent {
  readonly navigation: NavigationItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: 'insights' },
    { label: 'Receipts', path: '/receipts', icon: 'receipt_long' },
    { label: 'Budgets', path: '/budgets', icon: 'savings' },
    { label: 'Categories', path: '/categories', icon: 'category' },
    { label: 'Profile', path: '/profile', icon: 'manage_accounts' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.clearToken();
    this.router.navigate(['/auth/login']);
  }
}
