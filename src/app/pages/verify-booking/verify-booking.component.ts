import { AfterViewInit, Component, Injector, OnChanges, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-verify-booking',
    templateUrl: './verify-booking.component.html',
    styleUrls: ['./verify-booking.component.scss'],
})
export class VerifyBookingComponent extends AppComponentBase implements OnInit, OnChanges, AfterViewInit {
    statusVerify: boolean = false;
    errCode: number = 0;

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnChanges(): void {
        // this.render();
    }

    ngOnInit() {
        // this.render();
    }

    ngAfterViewInit(): void {
        this.render();
    }

    render() {
        let token = this._route.snapshot.queryParams['token'];
        let doctorId = this._route.snapshot.queryParams['doctorId'];
        if (token && doctorId) {
            this.showSpinner();
            this.userService
                .postVerifyBookAppointment({
                    token: token,
                    doctorId: doctorId,
                })
                .subscribe((res) => {
                    this.hideSpinner();
                    if (res && res['errCode'] === 0) {
                        this.statusVerify = true;

                        this.errCode = res['errCode'];
                    } else {
                        this.statusVerify = true;
                        this.errCode = res && res['errCode'] ? res['errCode'] : -1;
                    }
                });
        }
    }
}
