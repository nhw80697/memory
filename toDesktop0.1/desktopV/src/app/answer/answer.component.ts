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

  question = "";
  answer = "";
  posts:any;
  messege = "";
  currentRate = 0;
  
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
          this.messege = "נמצאו" + " " + this.posts.length +  " " + "שאלות "
        }

       
    
  }
    )}


  

  ngOnInit(): void {
    this.Answer();
  }

}
