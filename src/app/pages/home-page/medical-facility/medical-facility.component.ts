import { Component, Input, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-medical-facility',
  templateUrl: './medical-facility.component.html',
  styleUrls: ['./medical-facility.component.scss'],
})
export class MedicalFacilityComponent implements OnInit {
  @Input() configSlide: SwiperOptions;
  constructor() {}

  ngOnInit() {}
}
