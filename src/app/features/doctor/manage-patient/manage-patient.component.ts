import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-manage-patient',
    templateUrl: './manage-patient.component.html',
    styleUrls: ['./manage-patient.component.scss'],
})
export class ManagePatientComponent extends AppComponentBase implements OnInit {
    doctorId: number | string;
    chooseDate: Date = null;
    listPatients: Array<any> = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.render();
    }

    render() {
        this.doctorId = JSON.parse(localStorage.getItem('userInfo')).user.id;
        this.chooseDate = new Date();
        this.handleChooseDate(this.chooseDate);
    }

    handleChooseDate(date: Date): void {
        let formatedDate = new Date(date.toDateString()).getTime();
        this.userService.getAllPatientForDoctor({ doctorId: this.doctorId, date: formatedDate }).subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listPatients = res['data'];
            }
        });
    }

    disabledDate = (current: Date): boolean => {
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        return current < yesterday;
    };
}
