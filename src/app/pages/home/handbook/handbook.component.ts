import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-handbook',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.scss'],
})
export class HandbookComponent implements OnInit {
  @Input() configSlide: SwiperOptions;
  constructor() {}

  ngOnInit() {}
}
