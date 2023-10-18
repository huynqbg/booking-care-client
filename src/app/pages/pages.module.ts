import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { UserManageComponent } from './user-manage/user-manage.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { MaterialModule } from '@core/material/material.module';
@NgModule({
  imports: [CommonModule, PagesRoutingModule, MaterialModule],
  declarations: [UserManageComponent, PagesComponent, HeaderComponent],
})
export class PagesModule {}
