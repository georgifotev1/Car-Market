import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { sameValueGroupValidator } from 'src/app/shared/validators';

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
        password: ['', Validators.minLength(5)],
        rePass: [],
      },
      {
        validators: [sameValueGroupValidator('password', 'rePass')],
      }
    ),
  });

  constructor(private fb: FormBuilder) {}

  registerHandler() {
    console.log('click');
  }
}
