import { NgModule } from '@angular/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { CommonModule } from '@angular/common';
import { HeaderSystemComponent } from './components/header-system/header-system.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from '@core/zorro/ng-zorro-antd.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, TranslateModule, NgZorroAntdModule, RouterModule],
    declarations: [LanguageSelectorComponent, HeaderSystemComponent],
    exports: [LanguageSelectorComponent, HeaderSystemComponent],
})
export class SharedModule {}
