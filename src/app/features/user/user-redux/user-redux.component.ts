import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppComponentBase } from '@core/component-base/app-component-base';
import CommonUntils from '@core/utils/ultils';
import { UserService } from '@shared/services/user.service';
import { Buffer } from 'buffer';
import { marked } from 'marked';

@Component({
  selector: 'app-user-redux',
  templateUrl: './user-redux.component.html',
  styleUrls: ['./user-redux.component.scss'],
})
export class UserReduxComponent extends AppComponentBase implements OnInit {
  language: string = '';
  previewImgURL: string = '';
  isEdit: boolean = false;
  userId: any;
  listUsers: Array<any> = [];
  genderList: Array<any> = [];
  positionList: Array<any> = [];
  roleList: Array<any> = [];

  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

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
    console.log(this.transformMarkdownToHtml(this.markdown));
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
      console.log(body);
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
  }

  handleEditUser(user) {
    let imageBase64 = '';
    if (user.image) {
      imageBase64 = new Buffer(user.image, 'base64').toString('binary');
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
        console.log(this.genderList);
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

  transformMarkdownToHtml(
    markdown: string,
    options?: marked.MarkedOptions
  ): any {
    let html = '';
    if (markdown) {
      html = marked(markdown, options); // options can be undefined, merged onto marked's defaults
    }
    return html;
  }
}
