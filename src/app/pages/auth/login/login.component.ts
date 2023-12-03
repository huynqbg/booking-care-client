import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { USER_ROLE } from '@core/constant';
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

    constructor(private fb: FormBuilder, private authService: AuthService, injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.email = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]);
        this.password = new FormControl('', [Validators.required, Validators.maxLength(30)]);
        this.validateForm = this.fb.group({
            email: this.email,
            password: this.password,
        });
    }

    submitForm(): void {
        const valueForm = this.validateForm.value;
        if (this.validateForm.valid) {
            this.showSpinner();
            this.authService.handleLogin(valueForm.email, valueForm.password).subscribe((data) => {
                this.hideSpinner();
                if (data && data['errCode'] === 0) {
                    localStorage.setItem('userInfo', JSON.stringify(data));

                    // check role to redirect
                    let userInfo = JSON.parse(localStorage.getItem('userInfo')).user;
                    let userRole = userInfo.roleId;
                    if (userRole === USER_ROLE.ADMIN) {
                        this.router.navigate(['system/admin/user-redux']);
                    } else if (userRole === USER_ROLE.DOCTOR) {
                        this.router.navigate(['system/doctor/manage-schedule']);
                    }

                    this.toastr.success('Login successfully', 'Sucess');
                } else if (data && data['errCode'] !== 0) {
                    this.errMessage = data['message'];
                }
            });
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
            return 'You must enter your email';
        }

        return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}
