import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import CommonUntils from '@core/utils/ultils';
import { UserService } from '@shared/services/user.service';

@Component({
    selector: 'app-manage-patient',
    templateUrl: './manage-patient.component.html',
    styleUrls: ['./manage-patient.component.scss'],
})
export class ManagePatientComponent extends AppComponentBase implements OnInit {
    dataPatient: any = {};
    imageBase64: any;
    emailPatient: string = '';
    doctorId: number | string;
    isOpenModal: boolean = false;
    chooseDate: Date = null;
    listPatients: Array<any> = [];

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {
        this.language = localStorage.getItem('LANGUAGE') || 'vi';
        this.render();
        this.chooseDate = new Date();
        this.handleChooseDate(this.chooseDate);
    }

    render() {
        this.doctorId = JSON.parse(localStorage.getItem('userInfo')).user.id;
    }

    handleChooseDate(date: Date): void {
        let formatedDate = new Date(date.toDateString()).getTime();
        this.showSpinner();
        this.userService.getAllPatientForDoctor({ doctorId: this.doctorId, date: formatedDate }).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.listPatients = res['data'];
            }
        });
    }

    handleOpenModal(patient) {
        this.isOpenModal = true;
        this.dataPatient = {
            doctorId: patient.doctorId,
            patientId: patient.patientId,
            email: patient.patientData.email,
            timeType: patient.timeType,
            patientName: patient.patientData.firstName,
        };
        this.emailPatient = patient.patientData.email;
    }

    handleCancelModal() {
        this.isOpenModal = false;
    }

    handleConfirmModal() {
        this.showSpinner();
        this.userService
            .sendRemedyToPatient({
                email: this.emailPatient,
                imgBase64: this.imageBase64,
                doctorId: this.dataPatient.doctorId,
                patientId: this.dataPatient.patientId,
                timeType: this.dataPatient.timeType,
                language: this.language,
                patientName: this.dataPatient.patientName,
            })
            .subscribe((res) => {
                this.hideSpinner();
                if (res && res['errCode'] === 0) {
                    this.toastr.success('Gửi đơn thuốc thành công');
                    this.isOpenModal = false;
                    this.handleChooseDate(this.chooseDate); // refresh lại danh sách
                } else {
                    console.log(res);
                    this.toastr.error('Gửi đơn thuốc thất bại. Vui lòng kiểm tra lại !');
                }
            });
    }

    disabledDate = (current: Date): boolean => {
        let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
        return current < yesterday;
    };

    async handleImage($event) {
        let data = $event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUntils.getBase64(file);
            this.imageBase64 = base64;
        }
    }
}
