import { Component, OnInit } from '@angular/core';
//Parameterized Routing
import { ActivatedRoute, ParamMap } from '@angular/router';
//Reactive Form Components
import { FormGroup, FormControl } from '@angular/forms';
//Validators Component
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css'],
})
export class CoursedetailComponent implements OnInit {
  //Route Parameters in Angular
  id: number;

  //REACTIVE FORMS
  answerTypes = ['Yes', 'No'];
  myForm1: FormGroup;
  username: FormControl | any;
  password: FormControl | any;
  answerType: FormControl | any;
  age: FormControl | any;
  constructor(private route: ActivatedRoute) {}

  //METHOD 1 - USING route.snapshot - id must be string
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.paramMap.get('id')
  // }

  //METHOD 2 - USING SUBSCRIBE - id must be number
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });

    //REACTIVE FORMS
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
