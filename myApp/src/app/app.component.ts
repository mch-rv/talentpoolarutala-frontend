

import { Component, OnInit } from '@angular/core';
declare function decrement():any;
declare function increment():any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  constructor(){
  }

  ngOnInit():void{
    decrement();
    increment();
  }
}
