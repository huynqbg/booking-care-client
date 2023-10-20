import { Routes, RouterModule } from '@angular/router';
import { ErrorsComponent } from './errors.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorsComponent,
    children: [
      {
        path: '404',
        component: Error404Component,
      },
    ],
  },
];

export const ErrorsRoutingRoutes = RouterModule.forChild(routes);
