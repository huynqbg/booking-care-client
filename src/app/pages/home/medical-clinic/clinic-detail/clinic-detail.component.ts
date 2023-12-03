import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-clinic-detail',
    templateUrl: './clinic-detail.component.html',
    styleUrls: ['./clinic-detail.component.scss'],
})
export class ClinicDetailComponent extends AppComponentBase implements OnInit {
    clinicId: number | string;
    dataDetailClinic: any = {};
    arrDoctorId: Array<any> = [];
    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.renderApi();
    }

    renderApi() {
        this._route.paramMap.subscribe((param) => {
            this.clinicId = param.get('id');
        });
        this.showSpinner();
        this.userService.getAllDetailClinicById({ id: this.clinicId }).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                let data = res['data'];
                this.dataDetailClinic = res['data'];
                let arrDoctorId = [];
                if (data && Object.keys(data).length > 0) {
                    let arrDoctor = data.doctorClinic;
                    if (arrDoctor && arrDoctor.length > 0) {
                        arrDoctor.forEach((element) => {
                            arrDoctorId.push(element.doctorId);
                        });
                        this.arrDoctorId = arrDoctorId;
                    } else {
                        this.arrDoctorId = [];
                    }
                }
            }
        });
    }
}
