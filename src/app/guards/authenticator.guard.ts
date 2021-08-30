import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticatorServiceService } from '../services/authenticator-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorGuard implements CanActivate {
  constructor (private auth: AuthenticatorServiceService , private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):
    boolean{
    if(!this.auth.isLoggedIn()){
      this.router.navigate(['authenticate/login']);
      return false;
    }
    return this.auth.isLoggedIn();
  }
  
}
