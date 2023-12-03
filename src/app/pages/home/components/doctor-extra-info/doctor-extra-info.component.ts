import { Component, Injector, Input, OnChanges, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-doctor-extra-info',
    templateUrl: './doctor-extra-info.component.html',
    styleUrls: ['./doctor-extra-info.component.scss'],
})
export class DoctorExtraInfoComponent extends AppComponentBase implements OnInit, OnChanges {
    @Input() doctorId: any;
    isShowDetailInfo: boolean = false;
    extraInforDoctor: Array<any> = [];
    priceClinic: object = {};
    paymentMethod: object = {};

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnChanges(): void {
        this.renderApi();
    }

    ngOnInit() {
        // this._route.paramMap.subscribe((param) => {
        //     this.doctorId = param.get('id');
        // });
        // this.renderApi();
    }

    renderApi() {
        this.language = localStorage.getItem('LANGUAGE');
        this.showSpinner();
        this.userService.getExtraInfoDoctorById(this.doctorId).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.extraInforDoctor = res['data'];
                this.priceClinic = res['data'].priceData;
                this.paymentMethod = res['data'].paymentData;
            }
        });
    }
}
