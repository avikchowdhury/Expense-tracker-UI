import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page.component';
import { LoginFormComponent } from './components/login-form.component';
import { RegisterFormComponent } from './components/register-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginFormComponent },
      { path: 'register', component: RegisterFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
