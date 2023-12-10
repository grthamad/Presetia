import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
  ],
  bootstrap: [],
})
export class AppModule {}
