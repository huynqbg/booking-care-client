import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminRoutingRoutes } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserModalComponent } from './user-manage/user-modal/user-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { UserReduxComponent } from './user-redux/user-redux.component';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManageSpecialtyComponent } from './manage-specialty/manage-specialty.component';
import { ManageClinicComponent } from './manage-clinic/manage-clinic.component';
import { MatIconModule } from '@angular/material/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
    declarations: [
        AdminComponent,
        UserManageComponent,
        UserModalComponent,
        UserReduxComponent,
        ManageDoctorComponent,
        ManageSpecialtyComponent,
        ManageClinicComponent,
    ],
    imports: [
        CommonModule,
        NzInputModule,
        NzSelectModule,
        NzFormModule,
        NzDrawerModule,
        NzButtonModule,
        NzDatePickerModule,
        NzIconModule,
        NzTableModule,
        AdminRoutingRoutes,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        HttpClientModule,
        SharedModule,
        TranslateModule,
        MarkdownModule.forRoot(),
    ],
})
export class AdminModule {}
