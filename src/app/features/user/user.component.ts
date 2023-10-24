import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { adminMenu } from '@core/constant';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userInfo: any;
  adminMenu: Array<object> = adminMenu;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo')).user;
  }

  onLogout() {
    this.authService.handleLogout();
  }
}
