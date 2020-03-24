import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  
})
export class AnswerComponent implements OnInit {
  i = 0;
  posts:any;
  messege = "";
  currentRate = 0;
  question1 = "";
  answer1 = "";
  thereQuestions = false;

  constructor(private router: Router, private generalService: GeneralService,private config: NgbRatingConfig) { 
    config.max = 3;
  }
  

  Answer(){
    
    this.generalService.viewQuestion().
    subscribe(
      (res) =>{
        this.posts = res;
        if(this.posts.length == 0){
          this.messege = "לא נמצאו שאלות בנושא המבוקש";
        }else{
          this.thereQuestions = true;
          this.messege = "נמצאו" + " " + this.posts.length +  " " + "שאלות "
        }
        this.question1 = this.posts[this.i].addPost.question;
        this.answer1 = this.posts[this.i].addPost.answer;
       
    
  }
    )}

    


  

  ngOnInit(): void {
    this.Answer();
  }

  flip = false;
  rotate() {
    this.flip = !this.flip;
  }

  next(){
    if (this.i < this.posts.length - 1){this.i ++};
    this.question1 = this.posts[this.i].addPost.question;
        this.answer1 = this.posts[this.i].addPost.answer;
        this.flip = false;
  }

  back(){
    if (this.i >= 1){ this.i --};
    this.question1 = this.posts[this.i].addPost.question;
        this.answer1 = this.posts[this.i].addPost.answer;
  }

}
