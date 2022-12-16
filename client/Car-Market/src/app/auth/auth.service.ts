import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;

  get isLoggedIn() {
    return sessionStorage.hasOwnProperty('id_token');
  }

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string) {
    return this.http.post<IUser>('auth/register', {
      username,
      email,
      password,
    });
  }

  login(email: string, password: string) {
    return this.http.post<IUser>('auth/login', {
      email,
      password,
    });
  }

  logout() {
    return this.http.get<void>('auth/logout');
  }
}
