import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import * as moment from 'moment';
import CommonUntils from '@core/utils/ultils';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.scss'],
})
export class DoctorProfileComponent extends AppComponentBase implements OnInit, OnChanges {
    @Input() profileDoctor: any = {};
    @Input() dataTime: any = {};
    @Input() isShowDescription: boolean;
    nameDoctor: string = '';
    daySchedule: string = '';
    timeSchedule: string = '';

    constructor(injector: Injector) {
        super(injector);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.renderApi();
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
    }

    renderApi() {
        // get api profileDoctor from parent component
        this.showSpinner();
        if (this.profileDoctor) {
            this.hideSpinner();
            let positionData = this.profileDoctor.positionData;

            if (this.language === 'vi') {
                this.nameDoctor = `${positionData.valueVi}: ${this.profileDoctor.lastName} ${this.profileDoctor.firstName}`;
            } else if (this.language === 'en') {
                this.nameDoctor = `${positionData.valueEn}: ${this.profileDoctor.firstName} ${this.profileDoctor.lastName}`;
            } else {
                this.nameDoctor = '';
            }
        }

        // get api dataTime from parent component
        this.showSpinner();
        if (this.dataTime) {
            this.hideSpinner();
            if (this.language === 'vi') {
                this.daySchedule = moment
                    .unix(+this.dataTime.date / 1000)
                    .locale('vi')
                    .format('dddd - DD/MM/YYYY');
                this.timeSchedule = this.dataTime.timeTypeData.valueVi;
            } else if (this.language === 'en') {
                this.daySchedule = moment.unix(+this.dataTime.date / 1000).format('dddd - DD/MM/YYYY');
                this.timeSchedule = this.dataTime.timeTypeData.valueEn;
            } else {
                this.daySchedule = '';
                this.timeSchedule = '';
            }
            if (this.daySchedule) {
                this.daySchedule = CommonUntils.capitalizeFirstLetter(this.daySchedule);
            }
        }
    }
}
