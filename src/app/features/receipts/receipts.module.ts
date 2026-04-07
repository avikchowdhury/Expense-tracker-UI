import { NgModule } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { NotificationService } from '../../services/notification.service';
import { SharedModule } from '../../shared/shared.module';
import { ReceiptDeleteDialogComponent } from '../../pages/receipt-delete-dialog.component';
import { ReceiptEditDialogComponent } from '../../pages/receipt-edit-dialog.component';
import { ReceiptViewDialogComponent } from '../../pages/receipt-view-dialog.component';
import { ReceiptFiltersComponent } from './components/receipt-filters.component';
import { ReceiptTableComponent } from './components/receipt-table.component';
import { ReceiptUploadAssistantComponent } from './components/receipt-upload-assistant.component';
import { ReceiptsPageComponent } from './receipts-page.component';
import { ReceiptsRoutingModule } from './receipts-routing.module';

@NgModule({
  declarations: [
    ReceiptsPageComponent,
    ReceiptUploadAssistantComponent,
    ReceiptFiltersComponent,
    ReceiptTableComponent,
    ReceiptViewDialogComponent,
    ReceiptEditDialogComponent,
    ReceiptDeleteDialogComponent
  ],
  imports: [SharedModule, ReceiptsRoutingModule],
  providers: [CategoryService, NotificationService]
})
export class ReceiptsModule {}
