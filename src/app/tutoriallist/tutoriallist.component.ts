import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-tutoriallist',
  templateUrl: './tutoriallist.component.html',
  styleUrls: ['./tutoriallist.component.css'],
})
export class TutoriallistComponent implements OnInit {
  myFavoriteTutorial = [
    'Angular',
    'React',
    ".NET",
  ];

  selectedTutorialToWatch(data: string) {
    debugger;
    Swal.fire(data);
  }
  constructor() {}

  ngOnInit(): void {}
}
