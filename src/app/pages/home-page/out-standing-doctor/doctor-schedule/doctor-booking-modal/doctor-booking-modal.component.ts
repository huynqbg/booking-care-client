import { Component, Inject, Injector, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponentBase } from '@core/component-base/app-component-base';

@Component({
    selector: 'app-doctor-booking-modal',
    templateUrl: './doctor-booking-modal.component.html',
    styleUrls: ['./doctor-booking-modal.component.scss'],
})
export class DoctorBookingModalComponent extends AppComponentBase implements OnInit {
    constructor(
        injector: Injector,
        public modal: MatDialogRef<DoctorBookingModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        super(injector);
    }

    ngOnInit() {}
}
