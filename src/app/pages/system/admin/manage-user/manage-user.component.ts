import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppComponentBase } from '@core/component-base/app-component-base';
import CommonUntils from '@core/utils/ultils';
import { UserService } from '@shared/services/user.service';
import { Buffer } from 'buffer';

@Component({
    selector: 'app-manage-user',
    templateUrl: './manage-user.component.html',
    styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent extends AppComponentBase implements OnInit {
    previewImgURL: string = '';
    isEdit: boolean = false;
    userId: any;
    visibleForm = false;
    listUsers: Array<any> = [];
    genderList: Array<any> = [];
    positionList: Array<any> = [];
    roleList: Array<any> = [];

    constructor(injector: Injector, private userService: UserService, private fb: FormBuilder) {
        super(injector);
    }

    ngOnInit() {
        this.render();
        this.formGroup = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phoneNumber: ['', Validators.required],
            address: ['', Validators.required],
            gender: ['', Validators.required],
            position: ['', Validators.required],
            role: ['', Validators.required],
            avatar: [null, Validators.required],
        });
    }

    openForm(): void {
        this.visibleForm = true;
    }

    closeForm(): void {
        this.visibleForm = false;
        this.formGroup.reset();
    }

    checkValidateForm() {
        let isValid = true;
        const listForm = [
            'email',
            'password',
            'firstName',
            'lastName',
            'phoneNumber',
            'address',
            'gender',
            'position',
            'role',
            'avatar',
        ];

        for (let i = 0; i < listForm.length; i++) {
            if (!this.formGroup.value[`${listForm[i]}`]) {
                isValid = false;
                this.toastr.error('This input is required: ' + listForm[i]);
                break;
            }
        }
        return isValid;
    }

    submitForm() {
        const valueForm = this.formGroup.value;

        if (this.isEdit) {
            // edit user
            const body = {
                id: this.userId,
                // email: valueForm.email,
                // password: valueForm.password,
                firstName: valueForm.firstName,
                lastName: valueForm.lastName,
                address: valueForm.address,
                phoneNumber: valueForm.phoneNumber,
                gender: valueForm.gender,
                roleId: valueForm.role,
                positionId: valueForm.position,
                avatar: valueForm.avatar,
            };

            this.showSpinner();
            this.userService.editUser(body).subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.toastr.success('Update User Successfully ..!');
                    this.renderUsers();
                    this.formGroup.reset();
                    this.isEdit = false;
                    this.formGroup.controls['email'].enable();
                    this.formGroup.controls['password'].enable();
                    this.previewImgURL = '';
                } else {
                    this.toastr.error(res['errMessage']);
                }
            });
        } else {
            // add user
            const isValid = this.checkValidateForm();
            if (isValid === false) return;
            const body = {
                email: valueForm.email,
                password: valueForm.password,
                firstName: valueForm.firstName,
                lastName: valueForm.lastName,
                address: valueForm.address,
                phoneNumber: valueForm.phoneNumber,
                gender: valueForm.gender,
                roleId: valueForm.role,
                positionId: valueForm.position,
                avatar: valueForm.avatar,
            };
            this.showSpinner();
            this.userService.createNewUser(body).subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.toastr.success(`Create User Successfully  ..!`);
                    this.renderUsers();
                    this.formGroup.reset();
                    this.previewImgURL = '';
                } else {
                    this.toastr.error(res['errMessage']);
                }
            });
        }
        this.visibleForm = false;
    }

    handleEditUser(user) {
        let imageBase64 = '';
        if (user.image) {
            imageBase64 = Buffer.from(user.image, 'base64').toString('binary');
        }
        if (user) {
            this.isEdit = true;
            this.userId = user.id;
            this.formGroup.controls['email'].disable();
            this.formGroup.controls['password'].disable();
            this.formGroup.patchValue({
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phoneNumber: user.phoneNumber,
                gender: user.gender,
                role: user.roleId,
                position: user.positionId,
                // avatar: user.image,
            });

            this.previewImgURL = imageBase64;
            this.visibleForm = true;
        }
    }

    handleDeleteUser(user) {
        this.showSpinner();
        this.userService.deleteUser(user.id).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.renderUsers();
            } else {
                this.toastr.error(res['errMessage']);
            }
        });
        this.toastr.success('Delete User Successfully ..!');
    }

    render() {
        this.language = localStorage.getItem('LANGUAGE');
        this.getGender();
        this.getPosition();
        this.getRole();
        this.renderUsers();
    }

    renderUsers() {
        this.showSpinner();
        this.userService.getAllUsers('ALL').subscribe((data) => {
            this.hideSpinner();
            if (data && data['errCode'] === 0) {
                this.listUsers = data['users'];
                this.listUsers.reverse();
            }
        });
    }

    getGender() {
        this.showSpinner();
        this.userService.getAllCode('GENDER').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.genderList = res['data'];
            }
        });
    }

    getPosition() {
        this.showSpinner();
        this.userService.getAllCode('POSITION').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.positionList = res['data'];
            }
        });
    }

    getRole() {
        this.showSpinner();
        this.userService.getAllCode('ROLE').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.roleList = res['data'];
            }
        });
    }

    async handleImage($event) {
        let data = $event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUntils.getBase64(file);
            let objectUrl = URL.createObjectURL(file);
            this.previewImgURL = objectUrl;
            this.formGroup.value.avatar = base64;
        }
    }
}
