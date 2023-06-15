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

  //$event payload in Event binding
  value=''
  //Hello
  getValue(event:any){
    this.value=(event.target as HTMLInputElement).value;
  }

  //Template reference variable in Event binding
  value1=''
  getValue1(val:any){
    this.value1=val.value;
  }

  // Key filtering
  value2=''
  value3=''
  value4=''
  value5=''

  //Two-way binding
  value6=''
  clear(){
    this.value6=''
  }

  //Structural - *ngFor

  trainees:Trainee[]=[
    {
      traineeId:1,
      traineeName:'Arun'
    },
    {
      traineeId:2,
      traineeName:'Srikanth'
    },
    {
      traineeId:3,
      traineeName:'Sharon'
    },
    {
      traineeId:4,
      traineeName:'Hemanth'
    },
    {
      traineeId:5,
      traineeName:'Vignesh'
    },
    {
      traineeId:6,
      traineeName:'Sivabharath'
    },

  ]

  //ngSwitch - *ngSwitchCase , *ngSwitchDefault
  num:number=0;


  constructor() { }

  ngOnInit(): void {
  }

}

//Class -Properties - *ngFor
class Trainee{
  traineeId:number | undefined;
  traineeName:string | undefined;
}
