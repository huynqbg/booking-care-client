import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserReduxComponent } from './user-redux/user-redux.component';
import { AuthGuard } from '@core/guard/auth.guard';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'user-manage',
        pathMatch: 'full',
      },
      {
        path: 'user-manage',
        component: UserManageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user-redux',
        component: UserReduxComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'manage-doctor',
        component: ManageDoctorComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingRoutes {}
