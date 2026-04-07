import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AdminOverviewGridComponent } from './components/admin-overview-grid.component';
import { AdminUsersTableComponent } from './components/admin-users-table.component';
import { AdminPageComponent } from './admin-page.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminOverviewGridComponent,
    AdminUsersTableComponent,
  ],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
