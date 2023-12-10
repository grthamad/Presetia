import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  enteredName = 'Name';
  loading = false;

  updateLabel() {
    this.enteredName = this.enteredName.trim();
  }
  updatevalue() {
    this.enteredName = '';
  }

  loginMe() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
}
