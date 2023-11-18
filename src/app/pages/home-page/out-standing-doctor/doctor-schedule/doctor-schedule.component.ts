import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { LANGUAGES } from '@core/constant';
import { UserService } from '@shared/services/user.service';
import * as moment from 'moment';

@Component({
    selector: 'app-doctor-schedule',
    templateUrl: './doctor-schedule.component.html',
    styleUrls: ['./doctor-schedule.component.scss'],
})
export class DoctorScheduleComponent extends AppComponentBase implements OnInit {
    selectedDate = null;
    listDate: Array<any> = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.render();
    }

    render() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.setArrDate();
    }

    setArrDate() {
        let allDate = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (this.language === LANGUAGES.VI) {
                object['label'] = moment(new Date()).add(i, 'days').locale('vi').format('dddd - DD/MM');
            }
            if (this.language === LANGUAGES.EN) {
                object['label'] = moment(new Date()).add(i, 'days').format('ddd - MM/DD');
            }
            object['value'] = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            allDate.push(object);
        }
        this.listDate = allDate;
    }

    handleSelectDate(valueDate) {
        let doctorId;
        this._route.paramMap.subscribe((param) => {
            doctorId = param.get('id');
        });
        this.userService.getSchedulesDoctorByDate(doctorId, valueDate).subscribe((res) => {
            if (res && res['errCode'] === 0) {
                console.log(res);
            }
        });
    }
}
