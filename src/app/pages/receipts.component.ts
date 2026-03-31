import { Component, OnInit } from '@angular/core';
import { ReceiptService } from '../services/receipt.service';
import { ReceiptDto } from '../models';
import { MatDialog } from '@angular/material/dialog';
import { ReceiptViewDialogComponent } from './receipt-view-dialog.component';
import { ReceiptEditDialogComponent } from './receipt-edit-dialog.component';
import { ReceiptDeleteDialogComponent } from './receipt-delete-dialog.component';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent implements OnInit {
  receipts: ReceiptDto[] = [];
  displayedColumns: string[] = ['date', 'vendor', 'amount', 'category', 'actions'];
  totalReceipts = 0;
  pageSize = 10;
  pageIndex = 0;
  searchTerm = '';

  constructor(
    private receiptService: ReceiptService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.loadReceipts();
  }

  loadReceipts() {
    // TODO: Add pagination/search support in service
    this.receiptService.getReceipts().subscribe((data: any) => {
      // If backend returns { total, data }
      if (data && Array.isArray(data.data)) {
        this.receipts = data.data;
        this.totalReceipts = data.total;
      } else if (Array.isArray(data)) {
        // fallback if backend returns array
        this.receipts = data;
        this.totalReceipts = data.length;
      } else {
        this.receipts = [];
        this.totalReceipts = 0;
      }
    });
  }

  onPage(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    // TODO: Add real pagination
    this.loadReceipts();
  }

  onSearch() {
    // TODO: Add real search
    this.loadReceipts();
  }

  clearSearch() {
    this.searchTerm = '';
    this.loadReceipts();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.receiptService.uploadReceipt(file).subscribe(
        () => {
          this.notification.success('Receipt uploaded successfully', 'Uploaded');
          this.loadReceipts();
        },
        err => {
          this.notification.error('Failed to upload receipt.', 'Error');
        }
      );
    }
  }

  viewReceipt(receipt: ReceiptDto) {
    this.dialog.open(ReceiptViewDialogComponent, {
      width: '400px',
      data: { receipt }
    });
  }

  editReceipt(receipt: ReceiptDto) {
    const dialogRef = this.dialog.open(ReceiptEditDialogComponent, {
      width: '400px',
      data: { receipt }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const updatedReceipt = { ...receipt, ...result };
        this.receiptService.updateReceipt(receipt.id, updatedReceipt).subscribe(
          updated => {
            this.notification.success('Receipt updated successfully', 'Updated');
            this.loadReceipts();
          },
          err => {
            this.notification.error('Failed to update receipt.', 'Error');
          }
        );
      }
    });
  }

  deleteReceipt(receipt: ReceiptDto) {
    const dialogRef = this.dialog.open(ReceiptDeleteDialogComponent, {
      width: '350px',
      data: { receipt }
    });
    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.receiptService.deleteReceipt(receipt.id).subscribe(
          () => {
            this.notification.success('Receipt deleted successfully', 'Deleted');
            this.loadReceipts();
          },
          err => {
            this.notification.error('Failed to delete receipt.', 'Error');
          }
        );
      }
    });
  }
}
