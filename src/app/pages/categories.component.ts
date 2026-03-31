import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../services/notification.service';
import { CategoryEditDialogComponent } from './category-edit-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading = false;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.loading = true;
    this.categoryService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.loading = false;
      },
      error: () => {
        this.notification.error('Failed to load categories');
        this.loading = false;
      }
    });
  }

  addCategory() {
    const dialogRef = this.dialog.open(CategoryEditDialogComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name) {
        this.categoryService.addCategory(result.name).subscribe({
          next: (cat) => {
            this.notification.success('Category added');
            this.loadCategories();
          },
          error: () => this.notification.error('Failed to add category')
        });
      }
    });
  }

  editCategory(category: Category) {
    const dialogRef = this.dialog.open(CategoryEditDialogComponent, {
      width: '350px',
      data: { name: category.name }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.name && result.name !== category.name) {
        this.categoryService.updateCategory(category.id, result.name).subscribe({
          next: (updated) => {
            this.notification.success('Category updated');
            this.loadCategories();
          },
          error: (err) => {
            if (err.status === 409) {
              this.notification.error('Category name already exists');
            } else {
              this.notification.error('Failed to update category');
            }
          }
        });
      }
    });
  }

  deleteCategory(category: Category) {
    if (!confirm('Delete this category?')) return;
    this.categoryService.deleteCategory(category.id).subscribe({
      next: () => {
        this.notification.success('Category deleted');
        this.loadCategories();
      },
      error: () => this.notification.error('Failed to delete category')
    });
  }
}
