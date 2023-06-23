import { Component, OnInit } from '@angular/core';
//ActivatedRoute, Router to read the parameter passed from single-product
import { ActivatedRoute, Router } from '@angular/router';
//Consume getProductsById(id)
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnInit {
  //Route Parameter
  productId!: number;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  //load the current products response
  productData: any;

  //If product 1 is chosen id=1
  ngOnInit() {
    //this.productId = 1
    this.productId = this.actRoute.snapshot.params['id'];

    //Consume from ProductsService -> getProductsById(1)
    this.productService
      .getProductsById(this.productId) //1
      .subscribe((response) => {
        console.log(response);
        this.productData = response;
        console.log(this.productData);
      });
  }
}
