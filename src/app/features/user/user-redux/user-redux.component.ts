import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-user-redux',
  templateUrl: './user-redux.component.html',
  styleUrls: ['./user-redux.component.scss'],
})
export class UserReduxComponent extends AppComponentBase implements OnInit {
  language: string = '';
  previewImgURL: string = '';
  listUsers: Array<any> = [];
  genderList: Array<any> = [];
  positionList: Array<any> = [];
  roleList: Array<any> = [];

  constructor(
    injector: Injector,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    super(injector);
  }

  ngOnInit() {
    this.render();

    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      position: ['', Validators.required],
      role: ['', Validators.required],
      avatar: ['', Validators.required],
    });
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
        alert('This input is required: ' + listForm[i]);
        break;
      }
    }
    return isValid;
  }

  handleSaveUser() {
    const valueForm = this.formGroup.value;
    const isValid = this.checkValidateForm();
    if (isValid === false) return;

    const data = {
      email: valueForm.email,
      password: valueForm.password,
      firstName: valueForm.firstName,
      lastName: valueForm.lastName,
      address: valueForm.address,
      phoneNumber: valueForm.phoneNumberd,
      gender: valueForm.gender,
      roleId: valueForm.role,
      positionId: valueForm.position,
    };

    this.userService.createNewUser(data).subscribe((res) => {
      console.log(res);
      if (res && res['errCode'] === 0) {
        this.toastr.success(
          `
          Create User Successfully  ..!, 
          Please see new user in below!
        `
        );
        this.renderUsers();
        this.formGroup.reset();
        this.previewImgURL = '';
      } else {
        this.toastr.error(res['errMessage']);
      }
    });
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
        console.log(this.listUsers);
      }
    });
  }

  getGender() {
    this.showSpinner();
    this.userService.getAllCode('gender').subscribe((res) => {
      this.hideSpinner();
      if (res && res['errCode'] === 0) {
        this.genderList = res['data'];
      }
    });
  }

  getPosition() {
    this.showSpinner();
    this.userService.getAllCode('position').subscribe((res) => {
      this.hideSpinner();
      if (res && res['errCode'] === 0) {
        this.positionList = res['data'];
      }
    });
  }

  getRole() {
    this.showSpinner();
    this.userService.getAllCode('role').subscribe((res) => {
      this.hideSpinner();
      if (res && res['errCode'] === 0) {
        this.roleList = res['data'];
      }
    });
  }

  handleImage($event) {
    let data = $event.target.files;
    let file = data[0];
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      this.previewImgURL = objectUrl;
      this.formGroup.value.avatar = file;
    }
  }
}
