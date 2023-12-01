import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-specialty-detail',
    templateUrl: './specialty-detail.component.html',
    styleUrls: ['./specialty-detail.component.scss'],
})
export class SpecialtyDetailComponent extends AppComponentBase implements OnInit {
    specialtyId: number | string;
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
        this._route.paramMap.subscribe((param) => {
            this.specialtyId = param.get('id');
        });
        this.showSpinner();
        this.userService.getAllCode('PROVINCE').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listProvince = res['data'];
                this.listProvince.unshift({
                    keyMap: 'ALL',
                    type: 'PROVINCE',
                    valueVi: 'Toàn quốc',
                    valueEn: 'ALL',
                });
                // khoi tao là đã select ở tất cả bác sĩ của 1 chuyên khoa
                this.selectedProvince = this.listProvince[0].keyMap;
            }
        });

        this.showSpinner();
        this.userService
            .getAllDetailSpecialtyById({
                id: this.specialtyId,
                location: 'ALL',
            })
            .subscribe((res) => {
                this.hideSpinner();
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

    handleSelectProvince(location) {
        this.showSpinner();
        this.userService
            .getAllDetailSpecialtyById({
                id: this.specialtyId,
                location: location,
            })
            .subscribe((res) => {
                this.hideSpinner();
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
                        } else {
                            this.arrDoctorId = [];
                        }
                    }
                }
            });
    }
}
