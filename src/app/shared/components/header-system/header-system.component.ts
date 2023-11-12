import { Component, OnInit } from '@angular/core';
import { USER_ROLE, adminMenu, doctorMenu } from '@core/constant';
import { AuthService } from '@shared/services/auth.service';

@Component({
    selector: 'app-header-system',
    templateUrl: './header-system.component.html',
    styleUrls: ['./header-system.component.scss'],
})
export class HeaderSystemComponent implements OnInit {
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
