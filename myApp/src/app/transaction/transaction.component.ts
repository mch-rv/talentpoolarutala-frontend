import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  products:any;

  constructor(private api: ApiService){
  }

  ngOnInit() {
    this.api.getTransaction()
      .subscribe((response: any) => {
        this.products = response.product;
        console.log(response)
      });
  }
}

