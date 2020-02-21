import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataCheckingNamesService {



  constructor(public http: HttpClient) { }
  
  URL = 'http://localhost:3000/CheckSignIn';

  headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

  checUser(user){return this.http.post(this.URL, JSON.stringify(user), {
    headers: this.headers})}

 

  getUsers() {return this.http.get(this.URL);}
}
