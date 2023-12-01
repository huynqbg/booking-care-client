import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '@core/material/material.module';
import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';
import { SwiperModule } from 'swiper/angular';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from 'src/app/pages/home-page/layout/header/header.component';

import { HomePageSpecialtyComponent } from './home-page/home-page-specialty/home-page-specialty.component';
import { MedicalFacilityComponent } from './home-page/medical-facility/medical-facility.component';
import { OutStandingDoctorComponent } from './home-page/out-standing-doctor/out-standing-doctor.component';
import { HandbookComponent } from './home-page/handbook/handbook.component';
import { HomePageAboutComponent } from './home-page/home-page-about/home-page-about.component';
import { FooterComponent } from 'src/app/pages/home-page/layout/footer/footer.component';
import { DetailDoctorComponent } from './home-page/out-standing-doctor/detail-doctor/detail-doctor.component';
import { DoctorScheduleComponent } from './home-page/out-standing-doctor/doctor-schedule/doctor-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorExtraInfoComponent } from './home-page/out-standing-doctor/doctor-extra-info/doctor-extra-info.component';
import { DoctorBookingModalComponent } from './home-page/out-standing-doctor/doctor-schedule/doctor-booking-modal/doctor-booking-modal.component';
import { DoctorProfileComponent } from './home-page/out-standing-doctor/doctor-profile/doctor-profile.component';
import { SpecialtyDetailComponent } from './home-page/home-page-specialty/specialty-detail/specialty-detail.component';
import { ClinicDetailComponent } from './home-page/medical-facility/clinic-detail/clinic-detail.component';

@NgModule({
    declarations: [
        PagesComponent,
        HeaderComponent,
        FooterComponent,
        HomePageComponent,
        HomePageSpecialtyComponent,
        MedicalFacilityComponent,
        OutStandingDoctorComponent,
        HandbookComponent,
        HomePageAboutComponent,
        DetailDoctorComponent,
        DoctorScheduleComponent,
        DoctorExtraInfoComponent,
        DoctorBookingModalComponent,
        DoctorProfileComponent,
        SpecialtyDetailComponent,
        ClinicDetailComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        NgZorroAntdModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        SwiperModule,
        SharedModule,
    ],
})
export class PagesModule {}
