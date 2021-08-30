import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorServiceService {

  constructor(private router: Router, private http: HttpClient) {}

  setToken(token : string):void{
    localStorage.setItem('token', token);
  }

  getToken() : string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['authenticate/login'])
  }

  logIn(body : any){
    return this.http.post('https://reqres.in/api/login',body);
}
}