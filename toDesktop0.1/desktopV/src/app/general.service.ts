import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(public http: HttpClient) { }


  headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');


    addQuestion(question){
      return this.http.post('http://localhost:3000/add-post', JSON.stringify(question), {
        headers: this.headers})}

    viewQuestion(){
      return this.http.post('http://localhost:3000/view-posts', JSON.stringify(this.questionsToShow),{
        headers: this.headers})}


        category = "";
        page = "";
        asksQuestion = true;
        questionsToShow = {cat: "", sub: ""}
}
