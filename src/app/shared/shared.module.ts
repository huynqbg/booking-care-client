import { NgModule } from '@angular/core';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LanguageSelectorComponent],
  exports: [LanguageSelectorComponent],
})
export class SharedModule {}
