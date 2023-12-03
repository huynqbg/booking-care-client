import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponentBase } from '@core/component-base/app-component-base';
import CommonUntils from '@core/utils/ultils';
import { UserService } from '@shared/services/user.service';
import * as moment from 'moment';

@Component({
    selector: 'app-doctor-booking-modal',
    templateUrl: './doctor-booking-modal.component.html',
    styleUrls: ['./doctor-booking-modal.component.scss'],
})
export class DoctorBookingModalComponent extends AppComponentBase implements OnInit {
    doctorId: string | number;
    dataProfileDoctor: any = {};
    dataTime: any = {};
    listGender: Array<any> = [];

    constructor(
        injector: Injector,
        private userService: UserService,
        private fb: FormBuilder,
        public modal: MatDialogRef<DoctorBookingModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.renderApi();

        this.formGroup = this.fb.group({
            fullName: ['', [Validators.required]],
            phoneNumber: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            address: ['', [Validators.required]],
            reason: ['', [Validators.required]],
            birthday: ['', [Validators.required]],
            gender: ['', [Validators.required]],
        });
    }

    renderApi() {
        // render data from parent component
        if (this.data && this.data.dataTime) {
            this.dataTime = this.data.dataTime;
            this.doctorId = this.data.dataTime.doctorId;
        }

        // render api profile doctor
        if (this.doctorId) {
            this.showSpinner();
            this.userService.getProfileDoctorById(this.doctorId).subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.dataProfileDoctor = res['data'];
                }
            });
        }

        // gender api gender
        this.showSpinner();
        this.userService.getAllCode('GENDER').subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listGender = res['data'];
            }
        });
    }

    handleConfirmBooking() {
        let valueForm = this.formGroup.value;
        let dateFormat = new Date(valueForm.birthday.toDateString()).getTime();
        let timeBuild = this.buildTimeBooking(this.dataTime);
        let nameDoctor = this.buildDoctorName(this.dataTime);

        const body = {
            fullName: valueForm.fullName,
            phoneNumber: valueForm.phoneNumber,
            email: valueForm.email,
            address: valueForm.address,
            reason: valueForm.reason,
            date: this.dataTime.date, // ngày đặt lịch
            birthday: dateFormat, // ngày sinh của bệnh nhân
            selectedGender: valueForm.gender,
            doctorId: this.doctorId,
            timeType: this.dataTime.timeType,
            language: this.language,
            timeString: timeBuild,
            doctorName: nameDoctor,
        };

        this.showSpinner();
        this.userService.postPatientBookAppointment(body).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.modal.close(true);
                this.toastr.success('Đặt lịch thành công, vui lòng kiểm tra email để xác nhận');
            } else {
                this.toastr.error('Có lỗi xảy ra, vui lòng thử lại sau');
            }
        });
    }

    buildTimeBooking(dataTime) {
        let daySchedule = '';
        let timeSchedule = '';
        if (dataTime) {
            if (this.language === 'vi') {
                daySchedule = moment
                    .unix(+dataTime.date / 1000)
                    .locale('vi')
                    .format('dddd - DD/MM/YYYY');
                timeSchedule = dataTime.timeTypeData.valueVi;
            } else if (this.language === 'en') {
                daySchedule = moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY');
                timeSchedule = dataTime.timeTypeData.valueEn;
            } else {
                daySchedule = '';
                timeSchedule = '';
            }
            if (daySchedule) {
                daySchedule = CommonUntils.capitalizeFirstLetter(daySchedule);
            }
            return `${timeSchedule} - ${daySchedule}`;
        }
        return '';
    }

    buildDoctorName(dataProfileDoctor) {
        let nameDoctor = '';
        if (dataProfileDoctor) {
            if (this.language === 'vi') {
                nameDoctor = ` ${dataProfileDoctor.doctorData.lastName} ${dataProfileDoctor.doctorData.firstName}`;
            } else if (this.language === 'en') {
                nameDoctor = ` ${dataProfileDoctor.doctorData.firstName} ${dataProfileDoctor.doctorData.lastName}`;
            } else {
                nameDoctor = '';
            }
        }
        return nameDoctor;
    }
}
