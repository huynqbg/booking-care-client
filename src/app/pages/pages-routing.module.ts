import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserManageComponent } from './user-manage/user-manage.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'user-manage',
        component: UserManageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
