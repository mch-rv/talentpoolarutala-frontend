import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product:any;

  constructor(private api: ApiService){
  }

  ngOnInit() {
    this.api.getProductDetail()
      .subscribe((response: any) => {
        this.product = response;
        console.log(response)
      });
  }
  postCart(){
    this.api.postCart().subscribe((Response:any) =>{
      console.log(Response);
    })
  }
}
