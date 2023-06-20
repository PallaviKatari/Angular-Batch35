import { Component, OnInit } from '@angular/core';
//Reactive Form Components
import { FormGroup, FormControl } from '@angular/forms';
//Validators Component
import { Validators } from '@angular/forms';
//Custom Validator
//import { FormBuilder,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor() {}
  answerTypes = ['Yes', 'No'];
  myForm1: FormGroup;
  username: FormControl | any;
  password: FormControl | any;
  answerType: FormControl | any;
  age: FormControl | any;
  ngOnInit() {
    //this.invokeStripe();
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(16)
    ]);
    this.password = new FormControl('', Validators.pattern('[a-zA-Z]*'));
    this.answerType = new FormControl('', Validators.required);
    this.age = new FormControl('', [Validators.required, Validators.min(18)]);
    this.myForm1 = new FormGroup({
      username: this.username,
      password: this.password,
      answerType: this.answerType,
      age: this.age,
    });
  }

  onSubmit(form: any) {
    console.log(form.value);
  }
}
