import { Component, Injector, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AppComponentBase implements OnInit {
  validateForm!: FormGroup;
  email: FormControl;
  password: FormControl;

  errMessage!: string;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]);
    this.validateForm = this.fb.group({
      email: this.email,
      password: this.password,
    });
  }

  submitForm(): void {
    const valueForm = this.validateForm.value;
    if (this.validateForm.valid) {
      this.showSpinner();
      this.authService
        .handleLogin(valueForm.email, valueForm.password)
        .subscribe((data) => {
          this.hideSpinner();
          if (data && data['errCode'] === 0) {
            localStorage.setItem('userInfo', JSON.stringify(data));
            this.router.navigate(['system/user-manage']);
          } else if (data && data['errCode'] !== 0) {
            this.errMessage = data['message'];
          }
        });
      this.toastr.success('Login successfully', 'Sucess');
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
