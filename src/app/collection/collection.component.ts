import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectable.service';
import { Collectable } from '../shared/collectable.model';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit {
  collectedItems : Collectable[] =  [];

  removeItem(item : Collectable){
      return this.collectableService.removeCollection(item);
  }

  constructor(private collectableService : CollectableService) { }

  ngOnInit() {
      this.collectedItems = this.collectableService.getCollection();
  }

}
