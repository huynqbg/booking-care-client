import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-out-standing-doctor',
  templateUrl: './out-standing-doctor.component.html',
  styleUrls: ['./out-standing-doctor.component.scss'],
})
export class OutStandingDoctorComponent implements OnInit {
  @Input() configSlide: SwiperOptions;
  constructor() {}

  ngOnInit() {}
}
