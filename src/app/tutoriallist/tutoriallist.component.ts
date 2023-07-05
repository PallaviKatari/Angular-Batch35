import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TutorialtableComponent } from '../tutorialtable/tutorialtable.component';
@Component({
  selector: 'app-tutoriallist',
  templateUrl: './tutoriallist.component.html',
  styleUrls: ['./tutoriallist.component.css'],
})
export class TutoriallistComponent implements OnInit {
  myFavoriteTutorial = ['Angular', 'React', '.NET'];

  //Angular,React
  selectedTutorialToWatch(data: string) {
    debugger;
    Swal.fire(data); // Angular,React
  }
  constructor() {}

  ngOnInit(): void {}
  //@ViewChild demo
  @ViewChild(TutorialtableComponent) hello!: TutorialtableComponent;

  ngAfterViewInit() {
    console.log(this.hello.GreetingMessage());
  }
}
