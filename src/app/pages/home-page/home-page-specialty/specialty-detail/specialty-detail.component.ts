import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-specialty-detail',
    templateUrl: './specialty-detail.component.html',
    styleUrls: ['./specialty-detail.component.scss'],
})
export class SpecialtyDetailComponent extends AppComponentBase implements OnInit {
    selectedProvince = null;
    arrDoctorId: Array<any> = [];
    listProvince: Array<any> = [];
    dataDetailSpecialty: any = {};

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.renderApi();
    }

    renderApi() {
        let specialtyId: number | string;
        this._route.paramMap.subscribe((param) => {
            specialtyId = param.get('id');
        });
        this.userService.getAllCode('PROVINCE').subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listProvince = res['data'];
            }
        });

        this.userService
            .getAllDetailSpecialtyById({
                id: specialtyId,
                location: 'ALL',
            })
            .subscribe((res) => {
                if (res && res['errCode'] === 0) {
                    let data = res['data'];
                    this.dataDetailSpecialty = res['data'];
                    let arrDoctorId = [];
                    if (data && Object.keys(data).length > 0) {
                        let arrDoctor = data.doctorSpecialty;
                        if (arrDoctor && arrDoctor.length > 0) {
                            arrDoctor.forEach((element) => {
                                arrDoctorId.push(element.doctorId);
                            });
                            this.arrDoctorId = arrDoctorId;
                        }
                    }
                }
            });
    }

    handleSelectProvince(event) {
        console.log(event);
    }
}
