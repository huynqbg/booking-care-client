import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'system',
        loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
    },
    {
        path: 'doctor',
        loadChildren: () => import('./features/doctor/doctor.module').then((m) => m.DoctorModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    },
    {
        path: 'error',
        loadChildren: () => import('./features/errors/errors.module').then((m) => m.ErrorsModule),
    },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
