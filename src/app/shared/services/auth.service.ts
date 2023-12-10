import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://localhost:3000/';
  constructor(private http: HttpClient) {}

  signup(username: string, email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}signup`;
    const requestBody = {
      username: username,
      email: email,
      password: password,
    };
    console.log('Hello this is signup body', requestBody);

    return this.http.post(url, requestBody);
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}login`;

    const requestBody = {
      username: username,
      password: password,
    };
    console.log('Hello this is login body', requestBody);

    return this.http.post(url, requestBody);
  }
}
