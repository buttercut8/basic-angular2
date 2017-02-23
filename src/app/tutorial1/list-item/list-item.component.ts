import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    @Input() infoLists;
    @Output() delete = new EventEmitter();

    paramsSubscription;

    OnDelete(e,infoDetail){
        e.preventDefault();
        this.delete.emit(infoDetail);
    }

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    //   this.paramsSubscription = this.activatedRoute.params.subscribe(params => {
    //       let city = params['city'];
    //       if(city.toLowerCase() === "all-list-item"){
    //           city = ''
    //       }
    //     //   this.getMediaItems(city);
    //   });
  }

  ngOnDestroy(){
    //   this.paramsSubscription.unsubscribe();
  }

}
