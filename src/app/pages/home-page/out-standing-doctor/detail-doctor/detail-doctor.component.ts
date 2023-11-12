import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-detail-doctor',
    templateUrl: './detail-doctor.component.html',
    styleUrls: ['./detail-doctor.component.scss'],
})
export class DetailDoctorComponent extends AppComponentBase implements OnInit {
    doctorId?: string;
    detailDoctor: any = {};
    language: string = '';
    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE');
        this._route.paramMap.subscribe((param) => {
            this.doctorId = param.get('id');
            this.showSpinner();
            this.userService.getDetailInfoDoctor(this.doctorId).subscribe((res) => {
                this.hideSpinner();
                this.detailDoctor = res['data'];
                console.log(this.detailDoctor.image);
            });
        });
    }
}
