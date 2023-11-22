import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-doctor-booking-modal',
    templateUrl: './doctor-booking-modal.component.html',
    styleUrls: ['./doctor-booking-modal.component.scss'],
})
export class DoctorBookingModalComponent extends AppComponentBase implements OnInit {
    doctorId: string | number;
    dataProfileDoctor: any = {};
    dataTime: any = {};

    constructor(
        injector: Injector,
        private userService: UserService,
        public modal: MatDialogRef<DoctorBookingModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.renderApi();
    }

    renderApi() {
        if (this.data && this.data.dataTime) {
            this.dataTime = this.data.dataTime;
            this.doctorId = this.data.dataTime.doctorId;
        }
        if (this.doctorId) {
            this.showSpinner();
            this.userService.getProfileDoctorById(this.doctorId).subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.dataProfileDoctor = res['data'];
                }
            });
        }
    }
}
