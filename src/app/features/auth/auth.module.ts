import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';
import { MaterialModule } from '@core/material/material.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [AuthComponent, LoginComponent],
})
export class AuthModule {}
