import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { NotificationService } from '../../../services/notification.service';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog.component';
import { Category, CategoryService, VendorCategoryRule } from '../../../services/category.service';
import { CategoryEditDialogComponent } from '../components/category-edit-dialog.component';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  categories: Category[] = [];
  vendorRules: VendorCategoryRule[] = [];
  loading = false;
  ruleSaving = false;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.loadCategoryWorkspace();
  }

  get activeRuleCount(): number {
    return this.vendorRules.filter((rule) => rule.isActive).length;
  }

  loadCategoryWorkspace() {
    this.loading = true;
    forkJoin({
      categories: this.categoryService.getCategories(),
      rules: this.categoryService.getVendorRules()
    }).subscribe({
      next: ({ categories, rules }) => {
        this.categories = categories;
        this.vendorRules = rules;
        this.loading = false;
      },
      error: () => {
        this.notification.error('Failed to load categories and vendor rules');
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
            this.loadCategoryWorkspace();
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
            this.loadCategoryWorkspace();
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Category',
        message: 'Are you sure you want to delete this category?'
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }

      this.categoryService.deleteCategory(category.id).subscribe({
        next: () => {
          this.notification.success('Category deleted');
          this.loadCategoryWorkspace();
        },
        error: () => this.notification.error('Failed to delete category')
      });
    });
  }

  createVendorRule(payload: { categoryId: number; vendorPattern: string }): void {
    this.ruleSaving = true;
    this.categoryService.addVendorRule(payload).subscribe({
      next: () => {
        this.notification.success('Vendor rule added');
        this.ruleSaving = false;
        this.loadCategoryWorkspace();
      },
      error: (error) => {
        const message = error?.error || 'Failed to add vendor rule';
        this.notification.error(message);
        this.ruleSaving = false;
      }
    });
  }

  updateVendorRule(payload: { id: number; categoryId: number; vendorPattern: string }): void {
    this.ruleSaving = true;
    this.categoryService.updateVendorRule(payload.id, payload).subscribe({
      next: () => {
        this.notification.success('Vendor rule updated');
        this.ruleSaving = false;
        this.loadCategoryWorkspace();
      },
      error: (error) => {
        const message = error?.error || 'Failed to update vendor rule';
        this.notification.error(message);
        this.ruleSaving = false;
      }
    });
  }

  deleteVendorRule(ruleId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete Vendor Rule',
        message: 'Are you sure you want to delete this vendor mapping rule?'
      }
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed) {
        return;
      }

      this.ruleSaving = true;
      this.categoryService.deleteVendorRule(ruleId).subscribe({
        next: () => {
          this.notification.success('Vendor rule deleted');
          this.ruleSaving = false;
          this.loadCategoryWorkspace();
        },
        error: () => {
          this.notification.error('Failed to delete vendor rule');
          this.ruleSaving = false;
        }
      });
    });
  }
}
