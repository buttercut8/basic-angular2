import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    @Input() infoLists;
    @Output() delete = new EventEmitter();

    OnDelete(e){
        e.preventDefault();
        this.delete.emit(this.infoLists);
    }

  constructor() { }

  ngOnInit() {
  }

}
