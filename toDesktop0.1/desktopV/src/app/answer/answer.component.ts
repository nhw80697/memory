import { Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


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

  constructor(private router: Router,
     private generalService: GeneralService,
     private config: NgbRatingConfig,
     public dialog: MatDialog) { 
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
          this.messege = "נמצאו" + " " + this.posts.length +  " " + "שאלות ";
          this.weightQuestion = 100 / this.posts.length;
        }
        this.question1 = this.posts[this.i].addPost.question;
        this.answer1 = this.posts[this.i].addPost.answer;
       
    
  }
    )}
    
    openDialog() {this.dialog.open(MessegeComponent, {});}

  

  ngOnInit(): void {
    this.Answer();
  }

  flip = false;
  rotate() {
    this.flip = !this.flip;
  }


  weightQuestion:number;
  grade = 0;

  answerTrue(){
    this.grade += this.weightQuestion;
    this.generalService.grade = this.grade;
    this.next();
  }

  next(){
    if (this.i < this.posts.length - 1){this.i ++}
    else{this.openDialog()};
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

@Component({
  selector: 'messegeAns',
  templateUrl: 'messegeAns.html',
})
export class MessegeComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<MessegeComponent>,
    private generalService: GeneralService,
    @Inject(MAT_DIALOG_DATA) public data) {}

  

  returnMenu(){
    this.dialogRef.close();
    this.router.navigateByUrl("/ask-or-answer")
  }
  grade = this.generalService.grade;

}