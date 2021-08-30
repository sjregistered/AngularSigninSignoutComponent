import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  rootUrl = "http://localhost:3000/users"
  constructor(private http : HttpClient) { }

  register(data : any){
    return this.http.post(this.rootUrl, data);
  }
}
