import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-doctor-detail',
    templateUrl: './doctor-detail.component.html',
    styleUrls: ['./doctor-detail.component.scss'],
})
export class DoctorDetailComponent extends AppComponentBase implements OnInit {
    doctorId?: string;
    detailDoctor: any = {};
    positionList: any = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE');
        this._route.paramMap.subscribe((param) => {
            this.doctorId = param.get('id');
        });
        this.showSpinner();
        this.userService.getDetailInfoDoctor(this.doctorId).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.detailDoctor = res['data'];
                this.positionList = res['data'].positionData;
            }
        });
    }
}
