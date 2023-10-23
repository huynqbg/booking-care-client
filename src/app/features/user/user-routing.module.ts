import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { UserReduxComponent } from './user-redux/user-redux.component';

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
      },
      {
        path: 'user-redux',
        component: UserReduxComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingRoutes {}
