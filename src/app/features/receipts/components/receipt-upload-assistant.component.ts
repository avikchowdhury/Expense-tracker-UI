import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Category } from '../../../services/category.service';
import { ReceiptAiParseResult } from '../../../models';

@Component({
  selector: 'app-receipt-upload-assistant',
  templateUrl: './receipt-upload-assistant.component.html',
  styleUrls: ['./receipt-upload-assistant.component.scss']
})
export class ReceiptUploadAssistantComponent implements OnChanges {
  @ViewChild('fileInput') fileInput?: ElementRef<HTMLInputElement>;
  @Input() selectedFile: File | null = null;
  @Input() preview: ReceiptAiParseResult | null = null;
  @Input() parsingPreview = false;
  @Input() uploading = false;
  @Input() categories: Category[] = [];

  @Output() fileSelected = new EventEmitter<File | null>();
  @Output() uploadRequested = new EventEmitter<{ category: string; notes: string }>();
  @Output() cleared = new EventEmitter<void>();

  category = '';
  notes = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['preview'] && this.preview) {
      this.category = this.preview.category || this.category;
    }

    if (changes['selectedFile'] && !this.selectedFile) {
      this.category = '';
      this.notes = '';
    }
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.fileSelected.emit(input.files?.[0] || null);
  }

  clear(): void {
    this.category = '';
    this.notes = '';
    if (this.fileInput?.nativeElement) {
      this.fileInput.nativeElement.value = '';
    }
    this.cleared.emit();
  }

  upload(): void {
    this.uploadRequested.emit({
      category: this.category,
      notes: this.notes
    });
  }
}
