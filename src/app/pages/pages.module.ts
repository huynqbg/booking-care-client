import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages.component';
import { MaterialModule } from '@core/material/material.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, MaterialModule],
  declarations: [PagesComponent, HomePageComponent],
})
export class PagesModule {}
