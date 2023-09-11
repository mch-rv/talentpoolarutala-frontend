import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path: 'item-component/:id', component: ItemComponent },
  { path: 'catalogue', component: CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
