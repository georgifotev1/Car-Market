import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get username() {
    return sessionStorage.getItem('username');
  }
  constructor(private authService: AuthService) {}
}
