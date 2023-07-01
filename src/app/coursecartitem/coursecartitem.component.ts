import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Services/cart.service';
import { Cartitem } from 'src/Models/cartitem';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coursecartitem',
  templateUrl: './coursecartitem.component.html',
  styleUrls: ['./coursecartitem.component.css'],
})
export class CoursecartitemComponent implements OnInit {
  paymentHandler: any = null;

  //When testing interactively, use a card number, such as 4242 4242 4242 4242.
  //Enter the card number in the Dashboard or in any payment form.
  //se a valid future date, such as 12/34.
  //Use any three-digit CVC (four digits for American Express cards).
  makePayment(amount: any) {
    //makePayment() {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        //alert('Stripe token generated!');
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });

        Toast.fire({
          icon: 'success',
          title: 'Order Placed Successfully',
        });
      },
    });
    paymentHandler.open({
      name: 'Course',
      description: 'Order Details',
      amount: amount,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Kb7TuSGj6LZeNumr4WWZQlyT0VAdXUwQ0zPIJAmGbnt9MAwXkJ5aIfQOZsCPraDu1L2BxAyRb8jLSF5tB6fL8mO00Yw0HiRYf',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            const Toast = Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });

            Toast.fire({
              icon: 'error',
              title: 'Error in generating Stripe Payment Gateway',
            });
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  //constructor injection
  constructor(private cartSvc: CartService, private router: Router) {}
  //Cart List
  carts: Cartitem = {
    id: 0,
    name: '',
    description: '',
    fees: 0,
    img: '',
    quantity: 1,
    totalPrice: 1,
  };

  cartData: any = [];
  totalprice: number = 0;
  quantity = 1;

  totalPrice(data: any) {
    debugger;
    const intialValue = 0;
    this.cartData = data;
    const a = this.cartData.reduce(
      (sum: any, item: any) => sum + item.fees * item.quantity,
      intialValue
    );
    return a;
  }
  cart: Cartitem[] = [];

  delete(deleteItem: Cartitem) {
    this.cartSvc
      .removeItemFromCart(deleteItem)
      .subscribe(() => console.log(deleteItem.name));
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: 'error',
      title: 'Item deleted successfully',
    });
    this.ngOnInit();
  }
  onClick() {
    this.router.navigate(['course']);
  }
  ngOnInit(): void {
    this.invokeStripe();
    this.cartSvc.getCartItems().subscribe((response) => {
      this.cart = response;
      console.log(this.cart);
    });
  }
}
