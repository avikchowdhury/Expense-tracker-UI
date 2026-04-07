import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Profile, ProfileService } from '../services/profile.service';

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
export class AppShellComponent implements OnInit, OnDestroy {
  readonly navigation: NavigationItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: 'insights' },
    { label: 'Receipts', path: '/receipts', icon: 'receipt_long' },
    { label: 'Budgets', path: '/budgets', icon: 'savings' },
    { label: 'Categories', path: '/categories', icon: 'category' },
    { label: 'Profile', path: '/profile', icon: 'manage_accounts' }
  ];

  profile: Profile | null = null;
  private readonly subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.profileService.profile$.subscribe((profile) => {
        this.profile = profile;
      })
    );

    if (this.authService.isAuthenticated()) {
      this.subscription.add(this.profileService.getProfile().subscribe({ error: () => undefined }));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get avatarInitials(): string {
    const email = this.profile?.email?.trim() || '';
    return email ? email.slice(0, 2).toUpperCase() : 'AI';
  }

  logout(): void {
    this.profileService.clearProfile();
    this.authService.clearToken();
    this.router.navigate(['/auth/login']);
  }
}
