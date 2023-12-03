import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './home.routing';

import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@core/material/material.module';
import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';
import { SwiperModule } from 'swiper/angular';

import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/pages/home/components/header/header.component';

import { SpecialtyComponent } from './specialty/specialty.component';
import { MedicalClinicComponent } from './medical-clinic/medical-clinic.component';
import { OutStandingDoctorComponent } from './out-standing-doctor/out-standing-doctor.component';
import { HandbookComponent } from './handbook/handbook.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorDetailComponent } from './out-standing-doctor/doctor-detail/doctor-detail.component';
import { DoctorScheduleComponent } from './components/doctor-schedule/doctor-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorExtraInfoComponent } from './components/doctor-extra-info/doctor-extra-info.component';
import { DoctorBookingModalComponent } from './components/doctor-schedule/doctor-booking-modal/doctor-booking-modal.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { SpecialtyDetailComponent } from './specialty/specialty-detail/specialty-detail.component';
import { ClinicDetailComponent } from './medical-clinic/clinic-detail/clinic-detail.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SpecialtyComponent,
        MedicalClinicComponent,
        OutStandingDoctorComponent,
        HandbookComponent,
        AboutComponent,
        DoctorDetailComponent,
        DoctorScheduleComponent,
        DoctorExtraInfoComponent,
        DoctorBookingModalComponent,
        DoctorProfileComponent,
        SpecialtyDetailComponent,
        ClinicDetailComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutes,
        NgZorroAntdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        SwiperModule,
        SharedModule,
    ],
})
export class HomeModule {}
