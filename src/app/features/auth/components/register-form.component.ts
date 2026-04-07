import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  readonly form: FormGroup;
  showPassword = false;
  sendingOtp = false;
  registering = false;
  otpMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      otp: ['', Validators.required]
    });
  }

  sendOtp(): void {
    const emailControl = this.form.get('email');
    if (!emailControl?.valid || this.sendingOtp) {
      emailControl?.markAsTouched();
      this.otpMessage = 'Enter a valid Gmail address first.';
      return;
    }

    this.sendingOtp = true;
    this.otpMessage = '';

    this.authService.sendOtp(emailControl.value).subscribe({
      next: () => {
        this.otpMessage = 'OTP sent to your Gmail inbox.';
      },
      error: (err) => {
        this.otpMessage = err.error?.message || 'Failed to send OTP.';
      },
      complete: () => {
        this.sendingOtp = false;
      }
    });
  }

  submit(): void {
    if (this.form.invalid || this.registering) {
      this.form.markAllAsTouched();
      return;
    }

    this.registering = true;
    this.errorMessage = '';

    const { email, otp, password } = this.form.value;
    this.authService.verifyOtp(email, otp, password).subscribe({
      next: () => {
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed.';
        this.registering = false;
      },
      complete: () => {
        this.registering = false;
      }
    });
  }
}
