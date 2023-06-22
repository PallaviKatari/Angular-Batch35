import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //Query Parameters in Angular allow us to generate URLs with query strings.
  //Passing to CourseList Component
  //Query params (or Query Parameters) are key-value pairs that appear to the right of the ? in a URL. 
  //Each query parameter is separated by &.
  //Configured in the nav.component.html
  pageNum = '';
  constructor() { }

  ngOnInit(): void {
  }

}
