import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ask-a-question',
  templateUrl: './ask-a-question.component.html',
  styleUrls: ['./ask-a-question.component.css']
})
export class AskAQuestionComponent implements OnInit {
  handleChange(){
    this.router.navigateByUrl("/ask-question-amrican")
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
