import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  product:any;

  constructor(private api: ApiService){
  }

  ngOnInit() {
    this.api.getTransactionDetail()
      .subscribe((response: any) => {
        this.product = response.product;
        console.log(response)
      });
  }
}

