import { Component, OnInit } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.scss'],
})
export class ManageDoctorComponent implements OnInit {
  markdown: string = ``;
  selectedValue = null;
  description: string = '';

  constructor() {}

  ngOnInit() {}

  submit() {
    const body = {
      contentHTML: this.transformMarkdownToHtml(this.markdown),
      contentMarkdown: this.markdown,
      description: this.description,
      selectedOption: this.selectedValue,
    };
    console.log(body);
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
