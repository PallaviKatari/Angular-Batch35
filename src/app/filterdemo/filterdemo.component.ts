import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterdemo',
  templateUrl: './filterdemo.component.html',
  styleUrls: ['./filterdemo.component.css']
})
export class FilterdemoComponent implements OnInit {
  term:string = "";
  topics = [
    {
      "id": 1,
      "name": "DOTNET",
      "description": "DOTNET FULL STACK",
      "fees": 10000,
    },
    {
      "id": 2,
      "name": "JAVA",
      "description": "JAVA FULL STACK",
      "fees": 10000,
    },
    {
      "id": 3,
      "name": "PHP",
      "description": "PHP WITH LARAVEL",
      "fees": 10000,
    },
    {
      "id": 4,
      "name": "DOTNET",
      "description": "DOTNET Backend",
      "fees": 10000,
    },
    {
      "id": 5,
      "name": "JAVA",
      "description": "JAVA FULL STACK",
      "fees": 10000,
    },
    {
      "id": 6,
      "name": "PHP",
      "description": "PHP WITH LARAVEL Backend",
      "fees": 10000,
    },
    {
      "id": 7,
      "name": "PYTHON",
      "description": "PYTHON PROGRAMMING",
      "fees": 10000,
    }
  ]
  constructor(public ref : ChangeDetectorRef) { }

  ngOnInit() {
    //this.addTopic();
  }

  // addTopic(){
  //   setTimeout(()=>{
  //     console.log("triggered");
  //     this.topics.push({type:"share", name:"MotherIndia",num:3});
  //     this.topics=this.topics.slice();
  //     this.ref.detectChanges();
  //   },5000)
  // }
}
