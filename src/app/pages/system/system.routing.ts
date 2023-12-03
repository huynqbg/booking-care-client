import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: 'doctor',
        loadChildren: () => import('./doctor/doctor.module').then((m) => m.DoctorModule),
    },
];

export const SystemRoutes = RouterModule.forChild(routes);
