import { Component, OnInit } from '@angular/core';
import { ItemService } from "./item.service";
@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

    Infomation;


    OnDeleteInfomation(infoItem){
        console.log(infoItem);
        this.itemService.delete(infoItem);
    }

  constructor(private itemService : ItemService) { }

  ngOnInit() {
     this.Infomation =  this.itemService.get();
  }

}
