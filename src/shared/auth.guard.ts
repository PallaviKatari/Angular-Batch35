import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//UserService for authentication of route guards
import { UserService } from 'src/Services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean = false;
  //constructor of userservice
  constructor(private authService: UserService, private router: Router) {}

  canActivate(): // route: ActivatedRouteSnapshot,
  // state: RouterStateSnapshot

    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var isAuth = this.authService.authSubject.subscribe((data) => {
      console.log('next subscribed value: ' + data);
      this.isAuthenticated = data;
    });

    if (this.isAuthenticated == false) {
      console.log('inside false ' + this.isAuthenticated);
      this.router.navigate(['/signin']);
      return false;
    } else {
      console.log('next subscribed value:t3etg ' + this.isAuthenticated);
      return true;
    }
  }
}
