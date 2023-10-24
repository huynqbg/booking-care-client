import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-user-redux',
  templateUrl: './user-redux.component.html',
  styleUrls: ['./user-redux.component.scss'],
})
export class UserReduxComponent extends AppComponentBase implements OnInit {
  genderList: Array<any> = [];
  language: string = '';

  constructor(injector: Injector, private userService: UserService) {
    super(injector);
  }

  ngOnInit() {
    this.render();
  }

  render() {
    this.showSpinner();
    this.language = localStorage.getItem('LANGUAGE');
    this.userService.getAllcode('gender').subscribe((res) => {
      this.hideSpinner();
      if (res && res['errCode'] === 0) {
        this.genderList = res['data'];
      }
    });
  }
}
