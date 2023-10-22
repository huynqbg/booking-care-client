import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { MaterialModule } from '@core/material/material.module';

import { PagesComponent } from './pages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { LanguageSelectorComponent } from '@shared/components/language-selector/language-selector.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PagesComponent,
    HomePageComponent,
    HeaderComponent,
    LanguageSelectorComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, MaterialModule, TranslateModule],
})
export class PagesModule {}
