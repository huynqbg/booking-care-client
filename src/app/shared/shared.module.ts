import { NgModule } from '@angular/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { CommonModule } from '@angular/common';
import { HeaderSystemComponent } from './components/header-system/header-system.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        NzMenuModule,
        NzIconModule,
        NzDropDownModule,
        NzButtonModule,
        NzToolTipModule,
    ],
    declarations: [LanguageSelectorComponent, HeaderSystemComponent],
    exports: [LanguageSelectorComponent, HeaderSystemComponent],
})
export class SharedModule {}
