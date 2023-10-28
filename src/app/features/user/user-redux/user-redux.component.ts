import { Component, Injector, OnInit } from '@angular/core';
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
  genderList: Array<any> = [];
  positionList: Array<any> = [];
  roleList: Array<any> = [];

  constructor(injector: Injector, private userService: UserService) {
    super(injector);
  }

  ngOnInit() {
    this.render();
  }

  render() {
    this.language = localStorage.getItem('LANGUAGE');
    this.getGender();
    this.getPosition();
    this.getRole();
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
    }
  }
}
