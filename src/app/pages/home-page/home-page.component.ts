import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';

import SwiperCore, { Navigation, Autoplay, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

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

  configSlide: SwiperOptions = {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
  };
}
