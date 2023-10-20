import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { Error404Component } from './error404/error404.component';
import { ErrorsRoutingRoutes } from './errors-routing.routing';

@NgModule({
  declarations: [ErrorsComponent, Error404Component],
  imports: [CommonModule, ErrorsRoutingRoutes],
})
export class ErrorsModule {}
