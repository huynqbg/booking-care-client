import { Component, OnInit } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { adminMenu, USER_ROLE, doctorMenu } from '@core/constant';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    userInfo: any;
    menuApp: Array<object> = [];
    userRole: string = '';
    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo')).user;
        this.userRole = this.userInfo.roleId;
        if (this.userRole === USER_ROLE.ADMIN) {
            this.menuApp = adminMenu;
        } else if (this.userRole === USER_ROLE.DOCTOR) {
            this.menuApp = doctorMenu;
        }
    }

    onLogout() {
        this.authService.handleLogout();
    }
}
