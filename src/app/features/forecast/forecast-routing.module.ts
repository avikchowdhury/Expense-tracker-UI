import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastPageComponent } from './pages/forecast-page.component';

const routes: Routes = [{ path: '', component: ForecastPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastRoutingModule {}
