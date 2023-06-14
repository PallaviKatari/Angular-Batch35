import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Trending = ['Angular 16', 'React 18', 'Vue 3', '.NET 7.0'];

  isVisible: boolean = true;

  hideList(){
    this.isVisible = !this.isVisible;
}
}
