import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import { UserService } from '@shared/services/user.service';
import { marked } from 'marked';

@Component({
    selector: 'app-manage-doctor',
    templateUrl: './manage-doctor.component.html',
    styleUrls: ['./manage-doctor.component.scss'],
})
export class ManageDoctorComponent extends AppComponentBase implements OnInit {
    markdown: string = ``;
    description: string = '';
    nameClinic: string = '';
    addressClinic: string = '';
    note: string = '';
    selectedDoctor = null;
    selectedPrice = null;
    selectedPayment = null;
    selectedProvince = null;
    listDoctors: Array<any> = [];
    listPrice: Array<any> = [];
    listPayment: Array<any> = [];
    listProvince: Array<any> = [];
    hasOldData: boolean = false;

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE');
        this.renderApi();
    }

    handleSelectedDoctor(value) {
        this.userService.getDetailInfoDoctor(value).subscribe((res) => {
            console.log(res);
            if (res && res['errCode'] === 0 && res['data']) {
                if (res['data'].Markdown) {
                    let data = res['data'].Markdown;
                    this.markdown = data.contentMarkdown;
                    this.description = data.description;
                    this.hasOldData = true;
                } else {
                    this.markdown = '';
                    this.description = '';
                    this.hasOldData = false;
                }

                if (res['data'].Doctor_Info) {
                    let data = res['data'].Doctor_Info;
                    this.selectedPrice = data.priceId;
                    this.selectedPayment = data.paymentId;
                    this.selectedProvince = data.provinceId;
                    this.nameClinic = data.nameClinic;
                    this.addressClinic = data.addressClinic;
                    this.note = data.note;
                } else {
                    this.selectedPrice = null;
                    this.selectedPayment = null;
                    this.selectedProvince = null;
                    this.nameClinic = '';
                    this.addressClinic = '';
                    this.note = '';
                }
            }
        });
    }

    renderApi() {
        this.userService.getAllDoctors().subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listDoctors = res['data'].map((data) => {
                    return {
                        id: data.id,
                        nameVi: `${data.lastName} ${data.firstName}`,
                        nameEn: `${data.firstName} ${data.lastName}`,
                    };
                });
            }
        });
        this.userService.getAllCode('PRICE').subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listPrice = res['data'];
                console.log(this.listPrice);
            }
        });
        this.userService.getAllCode('PAYMENT').subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listPayment = res['data'];
            }
        });
        this.userService.getAllCode('PROVINCE').subscribe((res) => {
            if (res && res['errCode'] === 0) {
                this.listProvince = res['data'];
            }
        });
    }

    submit() {
        const body = {
            contentHTML: this.transformMarkdownToHtml(this.markdown),
            contentMarkdown: this.markdown,
            description: this.description,
            doctorId: this.selectedDoctor,
            action: this.hasOldData ? 'EDIT' : 'CREATE',

            selectedPrice: this.selectedPrice,
            selectedPayment: this.selectedPayment,
            selectedProvince: this.selectedProvince,
            nameClinic: this.nameClinic,
            addressClinic: this.addressClinic,
            note: this.note,
        };
        this.showSpinner();
        this.userService.saveDetailDoctor(body).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.toastr.success(res['errMessage']);
            } else {
                console.log(res);
                this.toastr.error('Error ..!');
            }
        });
    }

    transformMarkdownToHtml(markdown: string, options?: marked.MarkedOptions): any {
        let html = '';
        if (markdown) {
            html = marked(markdown, options); // options can be undefined, merged onto marked's defaults
        }
        return html;
    }
}
