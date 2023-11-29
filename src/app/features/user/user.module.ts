import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '@core/material/material.module';
import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';

import { UserRoutingRoutes } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserModalComponent } from './user-manage/user-modal/user-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { UserReduxComponent } from './user-redux/user-redux.component';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManageSpecialtyComponent } from './manage-specialty/manage-specialty.component';

@NgModule({
    declarations: [
        UserComponent,
        UserManageComponent,
        UserModalComponent,
        UserReduxComponent,
        ManageDoctorComponent,
        ManageSpecialtyComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        NgZorroAntdModule,
        UserRoutingRoutes,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        TranslateModule,
        MarkdownModule.forRoot(),
    ],
})
export class UserModule {}
