import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  products:any;

  constructor(private api: ApiService){
  }

  ngOnInit() {
    this.api.getProductInfo()
      .subscribe((response: any) => {
        this.products = response.product;
        console.log(response)
      });
  }
}

