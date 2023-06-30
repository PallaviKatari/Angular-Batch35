import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
//To access the userapi (i.e.) http://localhost:3000/users
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authSubject = new Subject<boolean>();
  //Nav component to block access to other components
  validateAuth(data:boolean) {
    //passing the data as the next observable
    this.authSubject.next(data);
  }
  
  value?:boolean;
    getAuthStatus(){
    this.authSubject.subscribe(
      data => 
      {
        console.log('inside user service: ' + data);
        this.value= data;
        console.log('inside user service 11: ' + this.value);
      }
    );
    return this.value;
  }
  constructor() { }
}
