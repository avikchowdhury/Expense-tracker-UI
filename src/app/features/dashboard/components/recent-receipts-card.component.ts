import { Component, Input } from '@angular/core';
import { ReceiptDto } from '../../../models';

@Component({
  selector: 'app-recent-receipts-card',
  templateUrl: './recent-receipts-card.component.html',
  styleUrls: ['./recent-receipts-card.component.scss']
})
export class RecentReceiptsCardComponent {
  @Input() receipts: ReceiptDto[] = [];
}
