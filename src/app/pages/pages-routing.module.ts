import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailDoctorComponent } from './home-page/out-standing-doctor/detail-doctor/detail-doctor.component';
import { SpecialtyDetailComponent } from './home-page/home-page-specialty/specialty-detail/specialty-detail.component';
import { ClinicDetailComponent } from './home-page/medical-facility/clinic-detail/clinic-detail.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'doctor-detail/:id',
        component: DetailDoctorComponent,
    },
    {
        path: 'specialty-detail/:id',
        component: SpecialtyDetailComponent,
    },

    {
        path: 'clinic-detail/:id',
        component: ClinicDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
