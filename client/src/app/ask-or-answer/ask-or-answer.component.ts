import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-or-answer',
  templateUrl: './ask-or-answer.component.html',
  styleUrls: ['./ask-or-answer.component.css']
})
export class AskOrAnswerComponent implements OnInit {
  amountOfQuestions:number = 0;
  constructor() { }

  ngOnInit() {
  }

}