import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectableService } from './shared/collectable.service';
//Tutorial 1
import { Tutorial1Component } from './tutorial1/tutorial1.component';
import { DesktopComponent } from './tutorial1/desktop/desktop.component';
import { ItemComponent } from './tutorial1/item/item.component';
import { ListItemComponent } from './tutorial1/list-item/list-item.component';
import { DetailItemComponent } from './tutorial1/detail-item/detail-item.component';
import { FavoriteDirective } from './tutorial1/list-item/favorite.directive';
import { CategoryListPipe } from './tutorial1/list-item/category-list.pipe';
import { ItemFormComponent } from './tutorial1/item-form/item-form.component';
import { ItemService } from './tutorial1/item/item.service';
import { routing } from './tutorial1/routing';
//Tutorial 2
import { Tutorial2Component } from './tutorial2/tutorial2.component';
import { EmployComponent } from './tutorial2/employ/employ.component';
import { EmployListComponent } from './tutorial2/employ-list/employ-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CollectionComponent,
    //tutorial 1
    Tutorial1Component,
    DesktopComponent,
    ItemComponent,
    ListItemComponent,
    DetailItemComponent,
    FavoriteDirective,
    CategoryListPipe,
    ItemFormComponent,
    //tutorial 2
    Tutorial2Component,
    EmployComponent,
    EmployListComponent,



  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [CollectableService, ItemService ],
  // providers: [],
  bootstrap: [ Tutorial1Component]
})
export class AppModule {

}
