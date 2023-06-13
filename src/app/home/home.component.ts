import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //One-way
  //Component -> View
  //Interpolation

  name="John"
  designation="Developer"

  getDetails():string{
    return this.designation;
  }

  getLarge(n1:number,n2:number):number{
    return Math.max(n1,n2);
  }

  //Property Binding

  title="Angular"
  isDisabled=true;
  imgUrl="https://openclipart.org/image/2400px/svg_to_png/272339/angular.png"
  color="red";
  
  
  //Property Binding - Content Security
  injectText='Hello<script>alert("Script Injection")</script>';
  
  //View -> Component
  //Event Binding
  count=0;
  count1=0
  click(){
    this.count++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
