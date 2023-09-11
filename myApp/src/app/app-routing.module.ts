import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './item/item.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'item-component/:id', component: ItemComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'transactionDetail/:id', component: TransactionDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
