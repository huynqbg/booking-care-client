import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent implements OnInit {
  lang: string;
  constructor(public translate: TranslateService) {
    translate.addLangs(['vi', 'en']);
    translate.setDefaultLang(this.lang || 'vi');
  }

  ngOnInit() {
    this.lang = localStorage.getItem('LANGUAGE');
    this.translate.use(this.lang);
  }

  changLanguage(lang: string) {
    localStorage.setItem('LANGUAGE', lang);
    window.location.reload();
  }
}
