import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//importing courses.json
import * as data from 'src/assets/data/courses.json';
//Custom Validator
import { ValidateMail } from 'src/shared/url.validator';
//Add to cart
import { CartService } from 'src/Services/cart.service';
import { Cartitem } from 'src/Models/cartitem';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {

  //constructor injection
  constructor(private cartsvc:CartService) { }

  //Add to cart
  cart:Cartitem={
    id:0,
    name:'',
    description:'',
    fees:0,
    img:'' ,
    totalPrice:0,
    quantity:0 
  }
  quantity:number=1;

  addToCart(item:any){
    this.cart.name=item.name;
    this.cart.description=item.description;
    this.cart.fees=item.fees;
    this.cart.img=item.img;
    this.cart.totalPrice=item.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.id=item.id;
    this.cartsvc.addToCart(this.cart);
    console.log(item.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }

  myForm: FormGroup;
  username: FormControl | any;
  mail: FormControl | any;

  ngOnInit() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16),
    ]);
    this.mail = new FormControl('', [Validators.required, ValidateMail]);
    this.myForm = new FormGroup({
      username: this.username,
      mail: this.mail,
    });
  }

  course: any = (data as any).default;
  //Toggle effect to show and hide the customer details
  courseDetail = true;
  //Event for Show and Hide
  showUserDetailsToggle() {
    this.courseDetail = !this.courseDetail; //!false
  }
  //class to show the change in + and - in the button
  getClass() {
    var classList = '';
    if (this.courseDetail) {
      //font-awesome
      classList = 'fa fa-plus';
    } else {
      classList = 'fa fa-minus';
    }
    return classList;
  }
  //property mycolor
  mycolor: any | undefined = 'red';

  onSubmit(form: any) {
    console.log(form.value);
  }
}
