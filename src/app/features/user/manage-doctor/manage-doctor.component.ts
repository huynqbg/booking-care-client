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
  listDoctors: Array<any> = [];
  markdown: string = ``;
  selectedValue = null;
  description: string = '';
  language: string = '';

  constructor(injector: Injector, private userService: UserService) {
    super(injector);
  }

  ngOnInit() {
    this.render();
  }

  render() {
    this.language = localStorage.getItem('LANGUAGE');
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
      console.log(this.listDoctors);
    });
  }

  submit() {
    const body = {
      contentHTML: this.transformMarkdownToHtml(this.markdown),
      contentMarkdown: this.markdown,
      description: this.description,
      doctorId: this.selectedValue,
    };
    this.showSpinner();
    this.userService.saveDetailDoctor(body).subscribe((res) => {
      this.hideSpinner();
      if (res && res['errCode'] === 0) {
        this.toastr.success(res['errMessage']);
      } else {
        this.toastr.error('Error ..!');
      }
    });
  }

  transformMarkdownToHtml(
    markdown: string,
    options?: marked.MarkedOptions
  ): any {
    let html = '';
    if (markdown) {
      html = marked(markdown, options); // options can be undefined, merged onto marked's defaults
    }
    return html;
  }
}
