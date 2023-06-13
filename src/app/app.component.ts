//Pre-defined component in Angular
//@angular/core - package - several components
import { Component } from '@angular/core';


//@ - decorator 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-batch35-app';
}
