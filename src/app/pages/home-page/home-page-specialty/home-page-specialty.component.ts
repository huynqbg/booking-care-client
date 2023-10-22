import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page-specialty',
  templateUrl: './home-page-specialty.component.html',
  styleUrls: ['./home-page-specialty.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageSpecialtyComponent implements OnInit {
  @Input() configSlide: SwiperOptions;
  constructor() {}

  ngOnInit() {}
}
