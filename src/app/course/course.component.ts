import { Component, OnInit } from '@angular/core';
import * as data from 'src/assets/data/courses.json'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  // sidebarVisible1=false
  // sidebarVisible2=false
  // sidebarVisible3=false
  // sidebarVisible4=false
  // pizzaSelection = ''

  constructor() { }

  ngOnInit(): void {
  }
  course: any = (data as any).default;
  //Toggle effect to show and hide the customer details
  courseDetail = false;
  //Event for Show and Hide
  showUserDetailsToggle() {
    this.courseDetail = !this.courseDetail;//!false
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
  mycolor:any|undefined="aqua";

}
