import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products:any;
  len:any;

  constructor(private api: ApiService){
  }

  ngOnInit() {
    this.api.getCart()
      .subscribe((response: any) => {
        this.products = response.product;
        this.len = response.product.lenght;
      });
  }
  postTransaction(){
    this.api.postTransaction().subscribe((Response:any) =>{
      console.log(Response);
    })
  }
}

