import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-manage-schedule',
    templateUrl: './manage-schedule.component.html',
    styleUrls: ['./manage-schedule.component.scss'],
})
export class ManageScheduleComponent extends AppComponentBase implements OnInit {
    selectedDoctor = null;
    chooseDate: Date = null;
    // timeDefaultValue: Date = setHours(0, 0);
    listDoctors: Array<any> = [];
    today = new Date();
    listTimeHour: Array<any> = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.render();
        this.renderTimeHour();
    }

    handleSaveSchedule() {
        let result = [];
        // let formatedDate = formatDate(this.chooseDate, dateFormat.dateVN, 'en-US');

        if (!this.selectedDoctor) {
            this.toastr.error('Please choose Doctor');
            return;
        }

        if (!this.chooseDate) {
            this.toastr.error('Please choose Date');
            return;
        }

        let formatedDate = new Date(this.chooseDate.toDateString()).getTime();

        if (this.listTimeHour && this.listTimeHour.length > 0) {
            let selectedTimeHour = this.listTimeHour.filter((time) => time.isSelected);
            if (selectedTimeHour && selectedTimeHour.length > 0) {
                selectedTimeHour.forEach((time) => {
                    result.push({
                        doctorId: this.selectedDoctor,
                        date: formatedDate,
                        timeType: time.keyMap,
                    });
                });
            } else {
                this.toastr.error('Please choose Time Hour');
                return;
            }
        }

        this.userService
            .saveBulkScheduleDoctor({
                arrSchedule: result,
                doctorId: this.selectedDoctor,
                formatedDate: formatedDate,
            })
            .subscribe((res) => {
                if (res && res['errCode'] === 0) {
                    this.toastr.success('Save Schedule Successfully');
                } else {
                    this.toastr.error('Save Schedule Failed');
                }
            });
    }

    handleClickTimeHour(timeHour) {
        timeHour.isSelected = !timeHour.isSelected;
    }

    renderTimeHour() {
        this.showSpinner();
        this.userService.getAllCode('TIME').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listTimeHour = res['data'].map((data) => ({
                    ...data,
                    isSelected: false,
                }));
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
