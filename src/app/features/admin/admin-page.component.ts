import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AdminOverview, AdminUserSummary, AppUserRole } from '../../models';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';
import { AdminService } from './admin.service';

type AdminUserFilter = 'all' | 'admins' | 'needs-setup' | 'recent';

interface AdminTrackingCard {
  label: string;
  value: number;
  hint: string;
  icon: string;
  tone: 'default' | 'positive' | 'warning';
}

interface AdminWatchlistItem {
  user: AdminUserSummary;
  reasons: string[];
}

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  overview: AdminOverview | null = null;
  users: AdminUserSummary[] = [];
  loading = false;
  updatingUserId: number | null = null;
  searchText = '';
  activityFilter: AdminUserFilter = 'all';
  readonly currentUserId = this.authService.getUserId();

  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private notification: NotificationService,
  ) {}

  ngOnInit(): void {
    this.loadAdminWorkspace();
  }

  loadAdminWorkspace(): void {
    this.loading = true;

    forkJoin({
      overview: this.adminService.getOverview(),
      users: this.adminService.getUsers(),
    }).subscribe({
      next: ({ overview, users }) => {
        this.overview = overview;
        this.users = users;
        this.loading = false;
      },
      error: () => {
        this.notification.error(
          'Failed to load the admin workspace.',
          'Admin',
        );
        this.loading = false;
      },
    });
  }

  handleRoleChange(event: { userId: number; role: AppUserRole }): void {
    if (this.updatingUserId) {
      return;
    }

    this.updatingUserId = event.userId;
    this.adminService.updateUserRole(event.userId, event.role).subscribe({
      next: () => {
        this.notification.success('User role updated.', 'Admin');
        this.updatingUserId = null;
        this.loadAdminWorkspace();
      },
      error: (error) => {
        const message =
          error?.error?.message || 'Failed to update the selected user role.';
        this.notification.error(message, 'Admin');
        this.updatingUserId = null;
      },
    });
  }

  setActivityFilter(filter: AdminUserFilter): void {
    this.activityFilter = filter;
  }

  get filteredUsers(): AdminUserSummary[] {
    const search = this.searchText.trim().toLowerCase();

    return this.users.filter((user) => {
      if (search && !user.email.toLowerCase().includes(search)) {
        return false;
      }

      switch (this.activityFilter) {
        case 'admins':
          return user.role === 'Admin';
        case 'needs-setup':
          return this.getWatchReasons(user).length > 0;
        case 'recent':
          return this.isRecentlyActive(user);
        case 'all':
        default:
          return true;
      }
    });
  }

  get visibleUserCountLabel(): string {
    if (this.filteredUsers.length === this.users.length) {
      return `${this.users.length} users`;
    }

    return `${this.filteredUsers.length} of ${this.users.length} users`;
  }

  get trackingCards(): AdminTrackingCard[] {
    const activeUploaders = this.users.filter((user) => user.receiptCount > 0)
      .length;
    const budgetReadyUsers = this.users.filter((user) => user.budgetCount > 0)
      .length;
    const recentlyActiveUsers = this.users.filter((user) =>
      this.isRecentlyActive(user),
    ).length;
    const watchlistCount = this.users.filter(
      (user) => this.getWatchReasons(user).length > 0,
    ).length;

    return [
      {
        label: 'Active uploaders',
        value: activeUploaders,
        hint: 'Users who have already saved at least one receipt',
        icon: 'upload_file',
        tone: 'positive',
      },
      {
        label: 'Budget coverage',
        value: budgetReadyUsers,
        hint: 'Accounts that already created one or more budgets',
        icon: 'savings',
        tone: 'default',
      },
      {
        label: 'Recent activity',
        value: recentlyActiveUsers,
        hint: 'Users with a receipt uploaded in the last 7 days',
        icon: 'schedule',
        tone: 'positive',
      },
      {
        label: 'Needs follow-up',
        value: watchlistCount,
        hint: 'Accounts missing receipts, budgets, or category setup',
        icon: 'priority_high',
        tone: 'warning',
      },
    ];
  }

  get watchlist(): AdminWatchlistItem[] {
    return this.filteredUsers
      .map((user) => ({
        user,
        reasons: this.getWatchReasons(user),
      }))
      .filter((item) => item.reasons.length > 0)
      .sort((left, right) => right.reasons.length - left.reasons.length);
  }

  private isRecentlyActive(user: AdminUserSummary): boolean {
    if (!user.latestReceiptAt) {
      return false;
    }

    const lastReceiptDate = new Date(user.latestReceiptAt);
    const diffInDays =
      (Date.now() - lastReceiptDate.getTime()) / (1000 * 60 * 60 * 24);

    return diffInDays <= 7;
  }

  private getWatchReasons(user: AdminUserSummary): string[] {
    const reasons: string[] = [];

    if (user.receiptCount === 0) {
      reasons.push('No receipts uploaded');
    }

    if (user.budgetCount === 0) {
      reasons.push('No budget configured');
    }

    if (user.categoryCount === 0) {
      reasons.push('No categories configured');
    }

    return reasons;
  }
}
