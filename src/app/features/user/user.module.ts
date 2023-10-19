import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@core/material/material.module';

import { UserRoutingRoutes } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserModalComponent } from './user-manage/user-modal/user-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserComponent, UserManageComponent, UserModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingRoutes,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class UserModule {}
