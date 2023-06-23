import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  //Gets the input from the Products Component
  @Input() products: any;

  //Inject the Router Service
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  productId!: number;

  //click event on image = id = 1
  viewProduct(id: number) {
    this.productId = id;
    this.router.navigate(['viewProduct/' + id]);
  }
}
