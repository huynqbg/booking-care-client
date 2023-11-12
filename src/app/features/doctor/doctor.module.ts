import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';

import { DoctorRoutingRoutes } from './doctor-routing.routing';
import { TranslateModule } from '@ngx-translate/core';
import { MarkdownModule } from 'ngx-markdown';
import { DoctorComponent } from './doctor.component';
import { SharedModule } from '@shared/shared.module';

import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';

@NgModule({
    declarations: [DoctorComponent, ManageScheduleComponent],
    imports: [
        CommonModule,
        DoctorRoutingRoutes,
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
