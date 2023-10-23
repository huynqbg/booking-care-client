import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@core/material/material.module';

import { UserRoutingRoutes } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserModalComponent } from './user-manage/user-modal/user-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { UserReduxComponent } from './user-redux/user-redux.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserComponent,
    UserManageComponent,
    UserModalComponent,
    UserReduxComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UserRoutingRoutes,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    TranslateModule,
  ],
})
export class UserModule {}
