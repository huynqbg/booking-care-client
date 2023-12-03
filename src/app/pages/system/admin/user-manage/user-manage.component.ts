import { Component, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '@shared/services/user.service';
import { UserModalComponent } from './user-modal/user-modal.component';
import { AppComponentBase } from '@core/component-base/app-component-base';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent extends AppComponentBase implements OnInit {
  listUsers: any = [];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    injector: Injector
  ) {
    super(injector);
  }

  ngOnInit() {
    this.renderUsers();
  }

  renderUsers() {
    this.showSpinner();
    this.userService.getAllUsers('ALL').subscribe((data) => {
      this.hideSpinner();
      if (data && data['errCode'] === 0) {
        this.listUsers = data['users'];
      }
    });
  }

  handleAddOrEditUser(user) {
    if (user) {
      const modal = this.dialog.open(UserModalComponent, {
        data: { user, isEdit: true },
        width: '800px',
      });

      modal.afterClosed().subscribe((results) => {
        if (results) {
          this.renderUsers();
        }
      });
    } else {
      const modal = this.dialog.open(UserModalComponent, {
        data: { user, isEdit: false },
        width: '800px',
      });
      modal.afterClosed().subscribe((results) => {
        if (results) {
          this.renderUsers();
        }
      });
    }
  }

  handleDeleteUser(user) {
    this.showSpinner();
    this.userService.deleteUser(user.id).subscribe((res) => {
      this.hideSpinner();
      if (res && res['errCode'] === 0) {
        this.renderUsers();
      } else {
        alert(res['errMessage']);
      }
    });
    this.toastr.success('Delete User Successfully', 'Success');
  }
}
