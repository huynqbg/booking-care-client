import { Routes, RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { AuthGuard } from '@core/guard/auth.guard';

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
        ],
    },
];

export const DoctorRoutingRoutes = RouterModule.forChild(routes);
