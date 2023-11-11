import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailDoctorComponent } from './home-page/out-standing-doctor/detail-doctor/detail-doctor.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'doctor/:id',
        component: DetailDoctorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
