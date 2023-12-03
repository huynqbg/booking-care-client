import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DoctorRoutes } from './doctor.routing';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { DoctorComponent } from './doctor.component';
import { SharedModule } from '@shared/shared.module';

import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
    declarations: [DoctorComponent, ManageScheduleComponent, ManagePatientComponent],
    imports: [
        CommonModule,
        DoctorRoutes,
        NzDatePickerModule,
        NzTableModule,
        NzModalModule,
        NzSelectModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        TranslateModule,
        MarkdownModule.forRoot(),
    ],
})
export class DoctorModule {}
