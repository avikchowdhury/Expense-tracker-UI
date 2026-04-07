import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-hero',
  templateUrl: './auth-hero.component.html',
  styleUrls: ['./auth-hero.component.scss']
})
export class AuthHeroComponent {
  @Input() mode: 'login' | 'register' = 'login';
}
