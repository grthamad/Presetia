import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
@NgModule({
  declarations: [LoginComponent, SignupComponent, AppComponent],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
