import { Component, Injector, Input, OnInit } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { SwiperOptions } from 'swiper';
import { Buffer } from 'buffer';
import { AppComponentBase } from '@core/component-base/app-component-base';

@Component({
  selector: 'app-out-standing-doctor',
  templateUrl: './out-standing-doctor.component.html',
  styleUrls: ['./out-standing-doctor.component.scss'],
})
export class OutStandingDoctorComponent
  extends AppComponentBase
  implements OnInit
{
  @Input() configSlide: SwiperOptions;

  language: string = '';
  listDoctor: Array<any> = [];

  constructor(private userService: UserService, injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.language = localStorage.getItem('LANGUAGE');
    this.render();
  }

  render() {
    this.showSpinner();
    this.userService.getDoctorHome('10').subscribe((res) => {
      if (res && res['errCode'] === 0) {
        res['data'].forEach((item) => {
          if (item.image) {
            let imageBase64 = '';
            imageBase64 = new Buffer(item.image, 'base64').toString('binary');
            item.image = imageBase64;
          }
        });
        this.hideSpinner();
        console.log(res['data']);
        this.listDoctor = res['data'];
      }
    });
  }
}
