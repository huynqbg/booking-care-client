import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-user-modal',
    templateUrl: './user-modal.component.html',
    styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent extends AppComponentBase implements OnInit {
    isEdit: boolean = false;

    constructor(
        injector: Injector,
        private fb: FormBuilder,
        private userService: UserService,
        public modal: MatDialogRef<UserModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        super(injector);
    }

    ngOnInit() {
        if (this.data.isEdit) {
            this.isEdit = this.data.isEdit;
        }

        this.formGroup = this.fb.group({
            email: [
                {
                    value: null,
                    // disabled: this.isEdit,
                },
                [Validators.email, Validators.required],
            ],
            password: [
                {
                    value: null,
                    // disabled: this.isEdit
                },
                Validators.required,
            ],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            address: [null, Validators.required],
        });

        if (this.data.user) {
            this.formGroup.patchValue(this.data.user);
        }
    }

    submitForm() {
        const valueForm = this.formGroup.value;
        if (this.data.isEdit) {
            const body = {
                id: this.data.user.id,
                firstName: valueForm.firstName,
                lastName: valueForm.lastName,
                address: valueForm.address,
            };
            this.showSpinner();
            this.userService.editUser(body).subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.modal.close(true);
                } else {
                    alert(res['errMessage']);
                }
            });
            this.toastr.success('Update User successfully', 'Success');
        } else {
            this.showSpinner();
            this.userService.createNewUser(valueForm).subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.modal.close(true);
                } else {
                    alert(res['errMessage']);
                }
            });
            this.toastr.success('Add User successfully', 'Success');
        }
    }
}
