

import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';
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
