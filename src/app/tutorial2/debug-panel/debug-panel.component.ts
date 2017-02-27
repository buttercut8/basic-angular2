import { Component, OnInit, Input, Output } from '@angular/core';
declare var $:any;



@Component({
  selector: 'debug-panel',
  templateUrl: './debug-panel.component.html',
  styleUrls: ['./debug-panel.component.scss']
})
export class DebugPanelComponent implements OnInit {
  // @Input() data;


  constructor() { }

  ngOnInit() {

    //   $(function(){
    //       console.log("asdsadas");
    //   })
  }

}
