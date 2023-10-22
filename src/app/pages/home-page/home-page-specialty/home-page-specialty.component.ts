import { Component, Input, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-page-specialty',
  templateUrl: './home-page-specialty.component.html',
  styleUrls: ['./home-page-specialty.component.scss'],
})
export class HomePageSpecialtyComponent implements OnInit {
  @Input() configSlide: SwiperOptions;
  constructor() {}

  ngOnInit() {}
}
