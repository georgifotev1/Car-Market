import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(5)]],
        rePass: [],
      },
      {
        validators: [sameValueGroupValidator('password', 'rePass')],
      }
    ),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerHandler() {
    const { username, email, pass: { password } = {} } = this.form.value;
    this.authService
      .register(username!, email!, password!)
      .subscribe((user) => {
        this.authService.user = user;
        localStorage.setItem('id_token', user.accessToken);
        this.router.navigate(['/catalog']);
      });
  }
}
