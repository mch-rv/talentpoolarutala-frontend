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
  getProduct() {
    return this.httpClient.get('https://www.mockachino.com/60c7666f-994c-4d/product');
  }
  getProductDetail() {
    return this.httpClient.get('https://www.mockachino.com/60c7666f-994c-4d/productDetail');
  }
  postCart(){
    const body = { 
      "product_id": 1,
    "product_name": "Iphone 10",
    "price": "8.000.000",
    "img": "https://www.kabarbisnis.com/images/picture/202210/1946-20221017_194454.jpg",
    "variant": [
        "yellow",
        "black",
        "red",
        "purple"
    ],
    "kondisi": "baru",
    "berat": "3 kg",
    "kategori": "Iphone dan Aksesoris",
    "view": 1000,
    "deskripsi": "I-phone x 256GB silver Keterangan * kondisi mulus * fungsi normal * fullset oem * icloud clean * bh 81% original * no minus"
     };
    return this.httpClient.post<any>('https://www.mockachino.com/60c7666f-994c-4d/post/cart', body);
  }
  getCart(){
    return this.httpClient.get('https://www.mockachino.com/60c7666f-994c-4d/cart');
  }
  postTransaction(){
    const body = {
      "product": [
        {
          "product_id": 1,
          "product_name": "Iphone 10",
          "price": "8.000.000",
          "img": "https://www.kabarbisnis.com/images/picture/202210/1946-20221017_194454.jpg",
          "invoice": "INV/20230911/ART/3038611559",
          "date": Date.now()
        }
      ]
    };
    return this.httpClient.post<any>('https://www.mockachino.com/60c7666f-994c-4d/post/transaction', body);
  }
  getTransaction(){
    return this.httpClient.get('https://www.mockachino.com/60c7666f-994c-4d/transaction');
  }
  getTransactionDetail(){
    return this.httpClient.get('https://www.mockachino.com/60c7666f-994c-4d/transactionDetail');
  }
}
