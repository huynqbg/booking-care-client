import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

import { SwiperOptions } from 'swiper';

@Component({
    selector: 'app-specialty',
    templateUrl: './specialty.component.html',
    styleUrls: ['./specialty.component.scss'],
})
export class SpecialtyComponent extends AppComponentBase implements OnInit {
    @Input() configSlide: SwiperOptions;

    listSpecialty: Array<any> = [];
    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.renderApi();
    }

    renderApi() {
        this.showSpinner();
        this.userService.getAllSpecialty().subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listSpecialty = res['data'];
            }
        });
    }
}
