import { Component, OnInit } from '@angular/core';
//import the ProductsService
import { ProductsService } from 'src/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //Inject the ProductsService
  constructor(private productService: ProductsService) {}

  //productsList:Products[] =[]; store the data from ProductsService -> getProducts()
  productsList: any[] = [];

  //Sort Pipe
  sortParam: any;
  sortDirection: any;
  optionSelected: any;

  //lth
  onOptionsSelected(event: any) {
    console.log(event.target.value); //option value will be sent as event
    this.optionSelected = event.target.value; //lth
    if (this.optionSelected === 'lth') {
      (this.sortParam = 'price'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'htl') {
      (this.sortParam = 'price'), (this.sortDirection = 'desc');
    } else if (this.optionSelected === 'nasc') {
      (this.sortParam = 'title'), (this.sortDirection = 'asc');
    } else if (this.optionSelected === 'ndesc') {
      (this.sortParam = 'title'), (this.sortDirection = 'desc');
    }
  }

  //Consume the ProductsService
  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.productsList = response;
      },

      (error) => {
        console.log('Error Occured: ' + error);
      }
    );
  }
}
