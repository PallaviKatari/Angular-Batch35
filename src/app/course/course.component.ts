import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//importing courses.json
import * as data from 'src/assets/data/courses.json';
//Custom Validator
import { ValidateMail } from 'src/shared/url.validator';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  // sidebarVisible1=false
  // sidebarVisible2=false
  // sidebarVisible3=false
  // sidebarVisible4=false
  // pizzaSelection = ''
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
