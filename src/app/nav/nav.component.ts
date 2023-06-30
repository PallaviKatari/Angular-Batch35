import { Component, OnInit } from '@angular/core';
//Add to cart
import { CartService } from 'src/Services/cart.service';
//Authentication
import { UserService } from 'src/Services/users.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  //Query Parameters in Angular allow us to generate URLs with query strings.
  //Passing to CourseList Component
  //Query params (or Query Parameters) are key-value pairs that appear to the right of the ? in a URL.
  //Each query parameter is separated by &.
  //Configured in the nav.component.html
  pageNum = '';

  //Authentication
  auth:boolean=false;

  //Add to cart
  cartCount: number = 0;
  constructor(private cartSvc: CartService,private authService:UserService) {}

  ngOnInit(): void {
    //Authentication
    this.authService.authSubject.subscribe(
      data => 
      {
        console.log('auth inside nav component: ' + data);
        this.auth = data;
      }
    );
    //Cart count
    this.cartSvc.getCartItems().subscribe((response) => {
      this.cartCount = response.length;
      console.log(this.cartCount);
    });
    this.cartSvc.countSubject.subscribe((response) => {
      this.cartCount = response;
      console.log(this.cartCount);
    });
  }
}
