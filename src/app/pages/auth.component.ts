import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  selectedTab: 'login' | 'register' = 'login';
  showPassword = false;

  switchTab(tab: 'login' | 'register') {
    this.selectedTab = tab;
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
