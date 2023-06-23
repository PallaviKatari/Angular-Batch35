import { Injectable } from '@angular/core';
//import HttpClientModule in app.module.ts
import { HttpClient } from '@angular/common/http';
//import Products.ts(interface - properties)
import { Products } from 'src/Models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //inject the HttpClient
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/Products';

  getProducts() {
    return this.http.get<Products[]>(this.url);
  }

  getProductsById(id: number) {
    return this.http.get<Products[]>(this.url + '?id=' + id);
  }
}
