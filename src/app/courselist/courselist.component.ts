import { Component, OnInit } from '@angular/core';
//Query Parameter Demo
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css'],
})
export class CourselistComponent implements OnInit {
  pageNo = 0;
  snapshotPageNo = 0;

  //We inject ActivatedRoute and Router Service in the constructor
  constructor(private activatedroute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //The queryParams is a Observable that returns a Params.
    //The Params array is a list of parameter values, indexed by name
    //Using snapshot.queryParamMap property
    //You can also read the value of the query parameter from queryParamMap using the snapshot property of the ActivatedRoute

    //Activatedroute.snapshot method to retrieve the pageNum and update the snapshotPageNo variable.
    this.snapshotPageNo =
      +this.activatedroute.snapshot.queryParamMap.get('pageNum') || 0;

    //We also subsc//ribe to the queryParams property.
    //We are updating our local variable pageNo with the page number obtained from the Queryparams
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.pageNo = +params.get('pageNum') || 0;
      console.log('Query params ', this.pageNo);
    });
  }

  //router.navigate method to take us to the next page
  nextPage() {
    this.router.navigate(['courselist'], {
      queryParams: { pageNum: this.pageNo + 1 },
    });

    //You can also use the navigateByUrl
    //this.router.navigateByUrl('product?pageNum='+(+this.pageNo+1),);
  }
}
