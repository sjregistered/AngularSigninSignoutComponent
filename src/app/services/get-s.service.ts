import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ourPeople } from '../interfaces/interface-admin';

@Injectable({
  providedIn: 'root'
})
export class GetSService {

  constructor(private http : HttpClient){}
  
  getOurPeople() : Observable<ourPeople[]> {
    return this.http.get <ourPeople[]> ('https://reqres.in/api/users?page=2');
  }
}