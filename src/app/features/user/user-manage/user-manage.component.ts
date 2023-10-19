import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '@shared/services/user.service';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss'],
})
export class UserManageComponent implements OnInit {
  listUsers: any = [];

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit() {
    this.renderUsers();
  }

  renderUsers() {
    this.userService.getAllUsers('ALL').subscribe((data) => {
      if (data && data['errCode'] === 0) {
        this.listUsers = data['users'];
      }
    });
  }

  // handleAddNewUser() {
  //   const modal = this.dialog.open(UserModalComponent, {
  //     width: '800px',
  //   });

  //   modal.afterClosed().subscribe((results) => {
  //     if (results) {
  //       this.renderUsers();
  //     }
  //   });
  // }

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
    this.userService.deleteUser(user.id).subscribe((res) => {
      if (res && res['errCode'] === 0) {
        this.renderUsers();
      } else {
        alert(res['errMessage']);
      }
    });
  }
}
