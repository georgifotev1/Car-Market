import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private authServide: AuthService,
    private fb: FormBuilder
  ) {}

  loginHandler() {
    const { email, password } = this.form.value;
    this.authServide.login(email!, password!).subscribe((user) => {
      sessionStorage.setItem('id_token', user.accessToken);
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('userId', user._id);
      this.authServide.user = user;
      this.router.navigate(['/catalog']);
    });
    this.form.reset();
  }
}
