import { Component, OnInit } from '@angular/core';
//Parameterized Routing
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css'],
})
export class CoursedetailComponent implements OnInit {
  //Route Parameters in Angular
  id: number;
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
  }
}
