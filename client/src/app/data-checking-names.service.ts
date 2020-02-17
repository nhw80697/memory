import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataCheckingNamesService {

  constructor(public http: HttpClient) { }


  URL = 'http://localhost:3000/CheckSignIn';

  getUsers() {return this.http.get(this.URL);}
}
