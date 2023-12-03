import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';
import { SwiperOptions } from 'swiper';

@Component({
    selector: 'app-medical-clinic',
    templateUrl: './medical-clinic.component.html',
    styleUrls: ['./medical-clinic.component.scss'],
})
export class MedicalClinicComponent extends AppComponentBase implements OnInit {
    @Input() configSlide: SwiperOptions;

    listClinic: Array<any> = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.renderApi();
    }

    renderApi() {
        this.showSpinner();
        this.userService.getAllClinic().subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listClinic = res['data'];
            }
        });
    }
}
