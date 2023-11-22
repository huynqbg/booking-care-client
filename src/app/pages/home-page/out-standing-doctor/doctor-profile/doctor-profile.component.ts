import { Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.scss'],
})
export class DoctorProfileComponent extends AppComponentBase implements OnInit, OnChanges {
    @Input() profileDoctor: any = {};
    nameDoctor: string = '';

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
    }
}
