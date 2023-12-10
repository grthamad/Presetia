import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  loading: boolean = false;
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  signMeUp(): void {
    this.loading = true;
    this.authService
      .signup(this.username, this.email, this.password)
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log('Signup successful', res);
          this.loading = false;
        },
        error: (err) => {
          console.error('Signup error', err);
          this.loading = false;
        },
      });
  }
}
