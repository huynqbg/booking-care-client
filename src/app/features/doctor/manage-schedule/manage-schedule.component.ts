import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-manage-schedule',
    templateUrl: './manage-schedule.component.html',
    styleUrls: ['./manage-schedule.component.scss'],
})
export class ManageScheduleComponent extends AppComponentBase implements OnInit {
    language: string = '';
    selectedDoctor = null;
    date: Date = null;
    listDoctors: Array<any> = [];
    today = new Date();
    listTime: Array<any> = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.render();
        this.renderTime();
    }

    handleChangeSelect(doctorId) {
        console.log(doctorId);
    }

    handleChangeDate(date) {
        console.log(date);
    }

    renderTime() {
        this.showSpinner();
        this.userService.getAllCode('TIME').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listTime = res['data'];
                console.log(this.listTime);
            }
        });
    }

    render() {
        this.language = localStorage.getItem('LANGUAGE');
        this.userService.getAllDoctors().subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listDoctors = res['data'].map((data) => {
                    return {
                        id: data.id,
                        nameVi: `${data.lastName} ${data.firstName}`,
                        nameEn: `${data.firstName} ${data.lastName}`,
                    };
                });
            }
        });
    }

    disabledDate = (current: Date): boolean => {
        return current < this.today;
    };
}
