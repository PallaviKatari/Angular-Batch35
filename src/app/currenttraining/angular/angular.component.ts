import { Component, OnInit } from '@angular/core';
//create a class to access the properties
export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public designation!: string;
  public phoneNumber!:number;
}
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  model = new User();
  designation: string[] = ['Developer', 'Designer', 'Tester', 'HR', 'SA'];
  constructor() {}
  // template variable #userForm="ngForm"
  // ngModel binds the properties to the form
  // ngSubmit subits the form
  // ngClass targets the default validator classes in Angular
  onSubmit(form: any) {
    console.log(form.value);
  }
  ngOnInit(): void {}

}
