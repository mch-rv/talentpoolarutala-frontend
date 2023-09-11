import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CatalogueComponent,
    ShoppingCartComponent,
    TransactionComponent,
    TransactionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
