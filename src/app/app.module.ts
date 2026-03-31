import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BudgetService } from './services/budget.service';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { DashboardComponent } from './pages/dashboard.component';
import { ReceiptsComponent } from './pages/receipts.component';
import { BudgetsComponent } from './pages/budgets.component';
import { CategoriesComponent } from './pages/categories.component';
import { ProfileComponent } from './pages/profile.component';
import { ReceiptViewDialogComponent } from './pages/receipt-view-dialog.component';
import { ReceiptEditDialogComponent } from './pages/receipt-edit-dialog.component';
import { ReceiptDeleteDialogComponent } from './pages/receipt-delete-dialog.component';
import { BudgetEditDialogComponent } from './pages/budget-edit-dialog.component';
import { ConfirmDialogComponent } from './pages/confirm-dialog.component';
import { CategoryEditDialogComponent } from './pages/category-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReceiptsComponent,
    BudgetsComponent,
    CategoriesComponent,
    ProfileComponent,
    ReceiptViewDialogComponent,
    ReceiptEditDialogComponent,
    ReceiptDeleteDialogComponent,
    BudgetEditDialogComponent,
    ConfirmDialogComponent,
    CategoryEditDialogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    NgChartsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    })
  ],
  providers: [
    BudgetService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
