import { Component, OnInit } from '@angular/core';
import { EmployService } from "./employ.service";
// import { Pipe } from "@angular/core";
// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employ',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.css'],
  providers: [EmployService]
})
export class EmployComponent implements OnInit {
    allItem :any = [];
    timeNow : string = "";
    timePost : string = "";

  constructor(private _httpservice : EmployService) { }


  ngOnInit() {
      this.allItem = this._httpservice.getItem();

      this._httpservice.getRequest()
        .subscribe(
            // data => this.timeNow = JSON.stringify(data),
            // error => alert(error),
            // () => console.log('Finished')
            data => {
                console.log(data);
                this.timeNow = data
            },
            error => {
                console.log(error);
            },
            () => {}
        );

      this._httpservice.postRequest()
        .subscribe(
            data => {
                console.log(data)
                this.timePost = JSON.stringify(data);
            },
            error => {
                console.log(error)
            },
            () => {}
        )
  }

}
