import { Component, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { LANGUAGES } from '@core/constant';
import { UserService } from '@shared/services/user.service';
import * as moment from 'moment';
import { DoctorBookingModalComponent } from './doctor-booking-modal/doctor-booking-modal.component';

@Component({
    selector: 'app-doctor-schedule',
    templateUrl: './doctor-schedule.component.html',
    styleUrls: ['./doctor-schedule.component.scss'],
})
export class DoctorScheduleComponent extends AppComponentBase implements OnInit {
    selectedDate: any;
    listDate: Array<any> = [];
    availableTime: Array<any> = [];

    constructor(injector: Injector, private userService: UserService, private dialog: MatDialog) {
        super(injector);
    }

    ngOnInit() {
        this.render();
    }

    render() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.setArrDate();
        this.selectedDate = this.listDate[0].value;
        this.handleSelectDate(this.selectedDate);
    }

    handleClickScheduleTime(data) {
        console.log(data);
        const modal = this.dialog.open(DoctorBookingModalComponent, {
            data: { data },
            width: '800px',
        });

        modal.afterClosed().subscribe((results) => {
            if (results) {
                console.log(results);
            }
        });
    }

    setArrDate() {
        let allDate = [];
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (this.language === LANGUAGES.VI) {
                if (i === 0) {
                    let ddMM = moment(new Date()).locale('vi').format('DD/MM');
                    let today = `Hôm nay - ${ddMM}`;
                    object['label'] = today;
                } else {
                    let labelVi = moment(new Date()).add(i, 'days').locale('vi').format('dddd - DD/MM');
                    object['label'] = this.capitalizeFirstLetter(labelVi);
                }
            }
            if (this.language === LANGUAGES.EN) {
                if (i === 0) {
                    let ddMM = moment(new Date()).format('MM/DD');
                    let today = `Today - ${ddMM}`;
                    object['label'] = today;
                } else {
                    object['label'] = moment(new Date()).add(i, 'days').format('ddd - MM/DD');
                }
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
            if (res && res['errCode'] === 0) this.availableTime = res['data'];
            console.log(this.availableTime);
        });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
