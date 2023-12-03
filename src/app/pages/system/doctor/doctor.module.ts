import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';

import { DoctorRoutes } from './doctor.routing';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { DoctorComponent } from './doctor.component';
import { SharedModule } from '@shared/shared.module';

import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';

@NgModule({
    declarations: [DoctorComponent, ManageScheduleComponent, ManagePatientComponent],
    imports: [
        CommonModule,
        DoctorRoutes,
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        TranslateModule,
        MarkdownModule.forRoot(),
    ],
})
export class DoctorModule {}
