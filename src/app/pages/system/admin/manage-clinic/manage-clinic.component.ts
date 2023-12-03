import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@core/component-base/app-component-base';
import CommonUntils from '@core/utils/ultils';
import { UserService } from '@shared/services/user.service';
import { marked } from 'marked';

@Component({
    selector: 'app-manage-clinic',
    templateUrl: './manage-clinic.component.html',
    styleUrls: ['./manage-clinic.component.scss'],
})
export class ManageClinicComponent extends AppComponentBase implements OnInit {
    name: string = '';
    address: string = '';
    imageBase64: any;
    descriptionHTML: string = '';
    descriptionMarkdown: string = '';

    constructor(injector: Injector, private userService: UserService) {
        super(injector);
    }

    ngOnInit() {}

    submit() {
        const body = {
            name: this.name,
            imageBase64: this.imageBase64,
            address: this.address,
            descriptionHTML: this.transformMarkdownToHtml(this.descriptionMarkdown),
            descriptionMarkdown: this.descriptionMarkdown,
        };

        this.showSpinner();
        this.userService.createNewClinic(body).subscribe((res) => {
            this.hideSpinner();
            if (res && res['errCode'] === 0) {
                this.toastr.success('Create new clinic success!');
                this.name = '';
                this.address = '';
                this.imageBase64 = '';
                this.descriptionHTML = '';
                this.descriptionMarkdown = '';
            } else {
                this.toastr.error('Create new clinic fail!');
            }
        });
    }

    async handleImage($event) {
        let data = $event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUntils.getBase64(file);
            this.imageBase64 = base64;
        }
    }

    transformMarkdownToHtml(markdown: string, options?: marked.MarkedOptions): any {
        let html = '';
        if (markdown) {
            html = marked(markdown, options); // options can be undefined, merged onto marked's defaults
        }
        return html;
    }
}
