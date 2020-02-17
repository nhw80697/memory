import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-a-question',
  templateUrl: './ask-a-question.component.html',
  styleUrls: ['./ask-a-question.component.css']
})
export class AskAQuestionComponent implements OnInit {

  addQuestion(a,b){
    alert ("האם להוסיף את השאלה: שאלה:" + a + "תשובה: " + b + "?");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
