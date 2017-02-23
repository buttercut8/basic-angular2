import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

   collectables : Collectable[] = [];

   AddItem(item : Collectable){
       this.collectableService.addCollection(item);
   }



  constructor(private collectableService : CollectableService) {

  }

  ngOnInit() {
      this.collectables = this.collectableService.getCollectables();
  }

}
