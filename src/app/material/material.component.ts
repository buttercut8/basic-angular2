import {Component, ViewChild, TemplateRef} from '@angular/core';
import {MdDialog} from '@angular/material';
@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
})
export class MaterialComponent {
  @ViewChild(TemplateRef) template: TemplateRef<any> ;

  constructor(public dialog: MdDialog) {}

  openTemplate() {
    this.dialog.open(this.template);
  }



}
