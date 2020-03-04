import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataCheckingNamesService {



  constructor(public http: HttpClient) { }
  

  nameInTheBar = "שלום ";
  URL = 'http://localhost:3000/check-sign-in';
  showUserName = false;
  
  headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

  checUser(user){return this.http.post('http://localhost:3000/login', JSON.stringify(user), {
    headers: this.headers})
  
  }

  getUsers() {return this.http.get(this.URL);}


  createAnAccount(user){
    return this.http.post('http://localhost:3000/signup', JSON.stringify(user), {
      headers: this.headers})}
  // createAnAccount(user){
  //   return this.http.post('http://localhost:3000/main/creat-user', JSON.stringify(user), {
  //     headers: this.headers})}
}
