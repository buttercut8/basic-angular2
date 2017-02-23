import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectable.service';
//

import { Tutorial1Component } from './tutorial1/tutorial1.component';
import { DesktopComponent } from './tutorial1/desktop/desktop.component';
import { ItemComponent } from './tutorial1/item/item.component';
import { ListItemComponent } from './tutorial1/list-item/list-item.component';
import { DetailItemComponent } from './tutorial1/detail-item/detail-item.component';
import { FavoriteDirective } from './tutorial1/list-item/favorite.directive';
import { CategoryListPipe } from './tutorial1/list-item/category-list.pipe';
import { ItemFormComponent } from './tutorial1/item-form/item-form.component';
import { ItemService } from './tutorial1/item/item.service';
import { lookupTokenGender, lookupGenders } from './tutorial1/providers';


@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
//
    Tutorial1Component,
    DesktopComponent,
    ItemComponent,
    ListItemComponent,
    DetailItemComponent,
    FavoriteDirective,
    CategoryListPipe,
    ItemFormComponent,


  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [CollectableService, ItemService, { provide : lookupTokenGender, useValue: lookupGenders } ],
  bootstrap: [Tutorial1Component]
})
export class AppModule {

}
