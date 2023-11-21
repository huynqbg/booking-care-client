import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-doctor-extra-info',
    templateUrl: './doctor-extra-info.component.html',
    styleUrls: ['./doctor-extra-info.component.scss'],
})
export class DoctorExtraInfoComponent implements OnInit {
    isShowDetailInfo: boolean = false;

    constructor() {}

    ngOnInit() {}
}
