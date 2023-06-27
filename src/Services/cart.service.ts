
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs'; //Observables - async
//Model - Cartitem.ts
import { Cartitem } from 'src/Models/cartitem';
@Injectable({
  providedIn: 'root',
})
export class CartService {

  url: string = '';
  carturl = 'http://localhost:3000/Cart';

  constructor(private http: HttpClient) {
    this.url = this.carturl + '/';
  }

  //Add course to Cartitem from course to coursecartitem
  addToCart(product: Cartitem) {
    this.http.post<Cartitem>(this.carturl, product).subscribe((data) => {
      console.log(data);
    });
  }

  //Cart API data
  getCartItems() {
    return this.http.get<Cartitem[]>(this.carturl);
  }

  //
  removeItemFromCart(item: any) {
    return this.http.delete(this.url + item.id);
  }

  //Cart Count - right top
  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe((res) => {
      // We use the subject to emit data
      this.countSubject.next(res.length);
      console.log(this.countSubject + 'inside sub');
      //const user=res.length
    });
  }
}
