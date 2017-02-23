import { Routes, RouterModule } from "@angular/router";
import { ItemComponent } from "./item/item.component";
import { ItemFormComponent } from "./item-form/item-form.component";

const appRoutes : Routes = [
    { path : 'form-add' , component: ItemFormComponent },
    { path : ':list-item-city' , component: ItemComponent },
    { path : '' , pathMatch: 'full' ,redirectTo: 'all-list-item'},
]

export const routing = RouterModule.forRoot(appRoutes);
