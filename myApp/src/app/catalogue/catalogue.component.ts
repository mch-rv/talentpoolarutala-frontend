import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  products:any;

  constructor(private api: ApiService){
  }

  ngOnInit() {
    this.api.getProduct()
      .subscribe((response: any) => {
        this.products = response.product;
        console.log(response)
      });
  }
}

