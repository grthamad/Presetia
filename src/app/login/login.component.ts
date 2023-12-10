import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  enteredName = 'Name';
  loading: boolean = false;
  password: string = '';

  constructor(private authService: AuthService) {}

  updateLabel() {
    this.enteredName = this.enteredName.trim();
  }
  updatevalue() {
    this.enteredName = '';
  }

  loginMe(): void {
    this.loading = true;
    this.authService
      .login(this.enteredName, this.password)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log('Login successful', res);
          this.loading = false;
        },
        error: (err) => {
          console.error('Login error', err);
          this.loading = false;
        },
      });
  }
}
