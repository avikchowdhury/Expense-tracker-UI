import { PageEvent } from '@angular/material/paginator';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReceiptDto } from '../../../models';

@Component({
  selector: 'app-receipt-table',
  templateUrl: './receipt-table.component.html',
  styleUrls: ['./receipt-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceiptTableComponent {
  @Input() receipts: ReceiptDto[] = [];
  @Input() loading = false;
  @Input() totalReceipts = 0;
  @Input() pageSize = 10;
  @Input() pageIndex = 0;
  @Input() selectedReceiptIds: number[] = [];

  @Output() pageChange = new EventEmitter<PageEvent>();
  @Output() view = new EventEmitter<ReceiptDto>();
  @Output() edit = new EventEmitter<ReceiptDto>();
  @Output() delete = new EventEmitter<ReceiptDto>();
  @Output() selectionChange = new EventEmitter<number[]>();

  readonly displayedColumns = [
    'select',
    'date',
    'vendor',
    'amount',
    'category',
    'actions',
  ];

  isSelected(receiptId: number): boolean {
    return this.selectedReceiptIds.includes(receiptId);
  }

  toggleReceipt(receiptId: number, checked: boolean): void {
    const nextSelection = checked
      ? [...new Set([...this.selectedReceiptIds, receiptId])]
      : this.selectedReceiptIds.filter((id) => id !== receiptId);

    this.selectionChange.emit(nextSelection);
  }

  toggleAllVisible(checked: boolean): void {
    this.selectionChange.emit(
      checked ? this.receipts.map((receipt) => receipt.id) : [],
    );
  }

  get allVisibleSelected(): boolean {
    return this.receipts.length > 0
      ? this.receipts.every((receipt) => this.isSelected(receipt.id))
      : false;
  }

  get someVisibleSelected(): boolean {
    return this.receipts.some((receipt) => this.isSelected(receipt.id));
  }
}
