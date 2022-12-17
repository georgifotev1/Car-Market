import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });
  responseError = null;
  constructor(
    private router: Router,
    private authServide: AuthService,
    private fb: FormBuilder
  ) {}

  loginHandler() {
    const { email, password } = this.form.value;
    this.authServide.login(email!, password!).subscribe(
      (res) => {
        sessionStorage.setItem('id_token', res.accessToken);
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('email', res.email);
        sessionStorage.setItem('userId', res._id);
        this.authServide.user = res;
        this.router.navigate(['/catalog']);
      },
      (error) => {
        this.responseError = error.error.message;
      }
    );
  }
}
