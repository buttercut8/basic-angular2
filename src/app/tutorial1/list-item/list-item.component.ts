import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    @Input() infoLists;
    @Output() delete = new EventEmitter();


    OnDelete(e,infoDetail){
        e.preventDefault();
        this.delete.emit(infoDetail);
    }

  constructor() { }

  ngOnInit() {

  }

}
