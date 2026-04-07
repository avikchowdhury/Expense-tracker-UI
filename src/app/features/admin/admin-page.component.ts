import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AdminOverview, AdminUserSummary, AppUserRole } from '../../models';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';
import { AdminService } from './admin.service';

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
}
