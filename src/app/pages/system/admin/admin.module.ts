import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdminRoutingRoutes } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManageSpecialtyComponent } from './manage-specialty/manage-specialty.component';
import { ManageClinicComponent } from './manage-clinic/manage-clinic.component';
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
        ManageUserComponent,
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
        HttpClientModule,
        SharedModule,
        TranslateModule,
        MarkdownModule.forRoot(),
    ],
})
export class AdminModule {}
