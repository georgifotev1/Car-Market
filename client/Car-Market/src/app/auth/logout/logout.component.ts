import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private router: Router, private authService: AuthService) {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.user = null;
        sessionStorage.removeItem('id_token');
        this.router.navigate(['/']);
      },
      error: () => {
        this.authService.user = null;
        sessionStorage.removeItem('id_token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('userId');
        this.router.navigate(['/']);
      },
    });
  }
}
