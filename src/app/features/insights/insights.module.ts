import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { InsightsRoutingModule } from './insights-routing.module';
import { InsightsPageComponent } from './pages/insights-page.component';

@NgModule({
  declarations: [InsightsPageComponent],
  imports: [SharedModule, InsightsRoutingModule],
})
export class InsightsModule {}
