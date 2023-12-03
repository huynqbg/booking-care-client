import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { AuthGuard } from '@core/guard/auth.guard';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';

const routes: Routes = [
    {
        path: '',
        component: DoctorComponent,
        children: [
            {
                path: '',
                redirectTo: 'manage-schedule',
                pathMatch: 'full',
            },
            {
                path: 'manage-schedule',
                component: ManageScheduleComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'manage-patient',
                component: ManagePatientComponent,
                canActivate: [AuthGuard],
            },
        ],
    },
];

export const DoctorRoutes = RouterModule.forChild(routes);
