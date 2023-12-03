import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DoctorDetailComponent } from './out-standing-doctor/doctor-detail/doctor-detail.component';
import { SpecialtyDetailComponent } from './specialty/specialty-detail/specialty-detail.component';
import { ClinicDetailComponent } from './medical-clinic/clinic-detail/clinic-detail.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'doctor-detail/:id',
        component: DoctorDetailComponent,
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

export const HomeRoutes = RouterModule.forChild(routes);
