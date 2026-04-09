import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ForecastPageComponent } from './pages/forecast-page.component';
import { ForecastRoutingModule } from './forecast-routing.module';

@NgModule({
  declarations: [ForecastPageComponent],
  imports: [SharedModule, ForecastRoutingModule],
})
export class ForecastModule {}
