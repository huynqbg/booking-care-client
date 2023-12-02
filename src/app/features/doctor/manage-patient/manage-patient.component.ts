import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';

@Component({
    selector: 'app-manage-patient',
    templateUrl: './manage-patient.component.html',
    styleUrls: ['./manage-patient.component.scss'],
})
export class ManagePatientComponent extends AppComponentBase implements OnInit {
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnInit() {}
}
