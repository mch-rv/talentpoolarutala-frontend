import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { };

  getStoreInfo() {
    return this.httpClient.get(`https://www.mockachino.com/60c7666f-994c-4d/users`);
  }
  getProductInfo() {
    return this.httpClient.get('https://www.mockachino.com/60c7666f-994c-4d/product');
  }
}
