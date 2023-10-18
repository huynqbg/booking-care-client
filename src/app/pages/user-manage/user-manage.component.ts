import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent implements OnInit {
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {}

  onLogout() {
    this.userService.handleLogout();
  }
}
