import { Component, Injector, Input, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

import { SwiperOptions } from 'swiper';

@Component({
    selector: 'app-home-page-specialty',
    templateUrl: './home-page-specialty.component.html',
    styleUrls: ['./home-page-specialty.component.scss'],
})
export class HomePageSpecialtyComponent extends AppComponentBase implements OnInit {
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
