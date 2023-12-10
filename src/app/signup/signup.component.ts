import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  loading = false;

  signMeUp() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
