import { NgModule } from '@angular/core';
import { CategoriesComponent } from '../../pages/categories.component';
import { CategoryEditDialogComponent } from '../../pages/category-edit-dialog.component';
import { SharedModule } from '../../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesComponent, CategoryEditDialogComponent],
  imports: [SharedModule, CategoriesRoutingModule]
})
export class CategoriesModule {}
