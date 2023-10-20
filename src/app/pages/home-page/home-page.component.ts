import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit() {}
}
