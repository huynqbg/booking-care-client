import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { MaterialModule } from '@core/material/material.module';
import { SwiperModule } from 'swiper/angular';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from 'src/app/pages/home-page/header/header.component';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';
import { HomePageSpecialtyComponent } from './home-page/home-page-specialty/home-page-specialty.component';
import { MedicalFacilityComponent } from './home-page/medical-facility/medical-facility.component';
import { OutStandingDoctorComponent } from './home-page/out-standing-doctor/out-standing-doctor.component';
import { HandbookComponent } from './home-page/handbook/handbook.component';
import { HomePageAboutComponent } from './home-page/home-page-about/home-page-about.component';
import { FooterComponent } from 'src/app/pages/home-page/footer/footer.component';
import { SharedModule } from '@shared/shared.module';

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
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    TranslateModule,
    SwiperModule,
    SharedModule,
  ],
})
export class PagesModule {}
