import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tutorialtable',
  templateUrl: './tutorialtable.component.html',
  styleUrls: ['./tutorialtable.component.css'],
})
export class TutorialtableComponent implements OnInit {
  @Input()
  tutorialList: Array<string> = [];

  @Output()
  tutorialSelectedEventEmitter = new EventEmitter();

  //Angular
  tutorialSelected(selectedTutorial: string) {
    this.tutorialSelectedEventEmitter.emit(selectedTutorial); //Angular
  }
  constructor() {}

  ngOnInit(): void {}
  //@ViewChild demo
  GreetingMessage() {
    return 'Hello Member! - I am an example of @ViewChild - currently been viewed in the tutorialslist componenet';
  }
}
