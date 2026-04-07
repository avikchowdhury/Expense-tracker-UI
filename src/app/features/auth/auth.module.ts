import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { AuthHeroComponent } from './components/auth-hero.component';
import { LoginFormComponent } from './components/login-form.component';
import { RegisterFormComponent } from './components/register-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AuthPageComponent, AuthHeroComponent, LoginFormComponent, RegisterFormComponent],
  imports: [SharedModule, AuthRoutingModule]
})
export class AuthModule {}
