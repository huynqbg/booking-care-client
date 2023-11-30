import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-specialty-detail',
    templateUrl: './specialty-detail.component.html',
    styleUrls: ['./specialty-detail.component.scss'],
})
export class SpecialtyDetailComponent implements OnInit {
    arrDoctorId = [7, 6, 5];

    constructor() {}

    ngOnInit() {}
}
