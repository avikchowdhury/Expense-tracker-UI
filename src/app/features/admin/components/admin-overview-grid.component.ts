import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdminOverview } from '../../../models';

interface AdminMetricCard {
  label: string;
  value?: string;
  amount?: number;
  digitsInfo?: string;
  hint: string;
  accent: string;
  icon: string;
}

@Component({
  selector: 'app-admin-overview-grid',
  templateUrl: './admin-overview-grid.component.html',
  styleUrls: ['./admin-overview-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminOverviewGridComponent {
  @Input() overview: AdminOverview | null = null;

  get cards(): AdminMetricCard[] {
    if (!this.overview) {
      return [
        {
          label: 'Workspace users',
          value: '--',
          hint: 'Loading account footprint',
          accent: 'rgba(15, 108, 91, 0.12)',
          icon: 'group',
        },
        {
          label: 'Admin seats',
          value: '--',
          hint: 'Loading privileged access',
          accent: 'rgba(19, 41, 61, 0.12)',
          icon: 'admin_panel_settings',
        },
        {
          label: 'Receipts tracked',
          value: '--',
          hint: 'Loading activity volume',
          accent: 'rgba(243, 156, 18, 0.12)',
          icon: 'receipt_long',
        },
        {
          label: 'Tracked spend',
          value: '--',
          hint: 'Loading captured receipt value',
          accent: 'rgba(39, 174, 96, 0.12)',
          icon: 'payments',
        },
      ];
    }

    return [
      {
        label: 'Workspace users',
        value: this.overview.totalUsers.toString(),
        hint: `${this.overview.standardUserCount} standard users in the workspace`,
        accent: 'rgba(15, 108, 91, 0.12)',
        icon: 'group',
      },
      {
        label: 'Admin seats',
        value: this.overview.adminCount.toString(),
        hint: 'Accounts allowed to manage roles and governance',
        accent: 'rgba(19, 41, 61, 0.12)',
        icon: 'admin_panel_settings',
      },
      {
        label: 'Receipts tracked',
        value: this.overview.receiptCount.toString(),
        hint: 'Uploaded documents available for audits and AI insights',
        accent: 'rgba(243, 156, 18, 0.12)',
        icon: 'receipt_long',
      },
      {
        label: 'Tracked spend',
        amount: this.overview.trackedReceiptSpend,
        digitsInfo: '1.0-0',
        hint: 'Approximate amount currently represented by saved receipts',
        accent: 'rgba(39, 174, 96, 0.12)',
        icon: 'payments',
      },
    ];
  }
}
