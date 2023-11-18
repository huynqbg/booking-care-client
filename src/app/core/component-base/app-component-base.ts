import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

export abstract class AppComponentBase {
    language: string = '';
    spinner: NgxSpinnerService;
    toastr: ToastrService;
    _route: ActivatedRoute;
    router: Router;
    formGroup: FormGroup;

    constructor(injector: Injector) {
        this.spinner = injector.get(NgxSpinnerService);
        this.toastr = injector.get(ToastrService);
        this._route = injector.get(ActivatedRoute);
        this.router = injector.get(Router);
    }

    showSpinner() {
        this.spinner
            .show()
            .then(() => {})
            .catch(() => {});
    }

    hideSpinner() {
        this.spinner
            .hide()
            .then(() => {})
            .catch(() => {});
    }
}
