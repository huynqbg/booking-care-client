import { Component, Injector, Input, OnChanges, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { LANGUAGES } from '@core/constant';
import { UserService } from '@shared/services/user.service';
import * as moment from 'moment';
import { DoctorBookingModalComponent } from './doctor-booking-modal/doctor-booking-modal.component';
import CommonUntils from '@core/utils/ultils';

@Component({
    selector: 'app-doctor-schedule',
    templateUrl: './doctor-schedule.component.html',
    styleUrls: ['./doctor-schedule.component.scss'],
})
export class DoctorScheduleComponent extends AppComponentBase implements OnInit, OnChanges {
    @Input() doctorId: any;
    selectedDate: any;
    listDate: Array<any> = [];
    availableTime: Array<any> = [];

    constructor(injector: Injector, private userService: UserService, private dialog: MatDialog) {
        super(injector);
    }

    ngOnChanges(): void {
        this.doctorId;
        this.render();
    }

    ngOnInit() {
        // this.render();
    }

    render() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.setArrDate();
        this.selectedDate = this.listDate[0].value;
        this.handleSelectDate(this.selectedDate);
    }

    handleClickScheduleTime(dataTime) {
        const modal = this.dialog.open(DoctorBookingModalComponent, {
            data: { dataTime },
            width: '800px',
        });

        modal.afterClosed().subscribe((results) => {
            if (results) {
                console.log('Đóng modal thành công');
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
                    object['label'] = CommonUntils.capitalizeFirstLetter(labelVi);
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
        // let doctorId;
        // this._route.paramMap.subscribe((param) => {
        //     doctorId = param.get('id');
        // });
        this.showSpinner();
        this.userService.getSchedulesDoctorByDate(this.doctorId, valueDate).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) this.availableTime = res['data'];
        });
    }
}
