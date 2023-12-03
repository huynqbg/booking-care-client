import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifyBookingComponent } from './pages/verify-booking/verify-booking.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'system',
        loadChildren: () => import('./pages/system/system.module').then((m) => m.SystemModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'error',
        loadChildren: () => import('./pages/errors/errors.module').then((m) => m.ErrorsModule),
    },
    {
        path: 'verify-booking',
        component: VerifyBookingComponent,
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
