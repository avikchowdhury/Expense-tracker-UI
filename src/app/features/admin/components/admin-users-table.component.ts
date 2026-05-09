import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminUserSummary, AppUserRole } from '../../../models';

@Component({
  selector: 'app-admin-users-table',
  templateUrl: './admin-users-table.component.html',
  styleUrls: ['./admin-users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminUsersTableComponent {
  @Input() users: AdminUserSummary[] = [];
  @Input() loading = false;
  @Input() updatingUserId: number | null = null;
  @Input() deletingUserId: number | null = null;
  @Input() bulkDeleting = false;
  @Input() currentUserId: number | null = null;
  @Input() selectedUserIds: number[] = [];
  @Output() roleChange = new EventEmitter<{
    userId: number;
    role: AppUserRole;
  }>();
  @Output() selectionToggle = new EventEmitter<number>();
  @Output() selectAllToggle = new EventEmitter<void>();
  @Output() deleteRequested = new EventEmitter<AdminUserSummary>();

  readonly displayedColumns = ['select', 'user', 'role', 'activity', 'actions'];

  trackByUserId(_index: number, user: AdminUserSummary): number {
    return user.id;
  }

  getAvatarInitials(user: AdminUserSummary): string {
    return user.email.slice(0, 2).toUpperCase();
  }

  canManage(user: AdminUserSummary): boolean {
    return user.id !== this.currentUserId;
  }

  get selectableUsers(): AdminUserSummary[] {
    return this.users.filter((user) => this.canManage(user));
  }

  get allSelectableChecked(): boolean {
    return (
      this.selectableUsers.length > 0 &&
      this.selectableUsers.every((user) => this.isSelected(user.id))
    );
  }

  get hasPartialSelection(): boolean {
    const selectedCount = this.selectableUsers.filter((user) =>
      this.isSelected(user.id),
    ).length;
    return selectedCount > 0 && selectedCount < this.selectableUsers.length;
  }

  getNextRole(user: AdminUserSummary): AppUserRole {
    return user.role === 'Admin' ? 'User' : 'Admin';
  }

  isSelected(userId: number): boolean {
    return this.selectedUserIds.includes(userId);
  }

  isBusy(user: AdminUserSummary): boolean {
    return (
      this.bulkDeleting ||
      this.updatingUserId === user.id ||
      this.deletingUserId === user.id
    );
  }

  toggleSelection(user: AdminUserSummary): void {
    if (!this.canManage(user) || this.isBusy(user)) {
      return;
    }

    this.selectionToggle.emit(user.id);
  }

  toggleAllSelections(): void {
    if (this.loading || this.bulkDeleting || !this.selectableUsers.length) {
      return;
    }

    this.selectAllToggle.emit();
  }

  submitRoleChange(user: AdminUserSummary): void {
    if (!this.canManage(user) || this.isBusy(user)) {
      return;
    }

    this.roleChange.emit({ userId: user.id, role: this.getNextRole(user) });
  }

  requestDelete(user: AdminUserSummary): void {
    if (!this.canManage(user) || this.isBusy(user)) {
      return;
    }

    this.deleteRequested.emit(user);
  }

  copyEmail(email: string): void {
    navigator.clipboard.writeText(email).catch(() => undefined);
  }
}
