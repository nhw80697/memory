import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';



@Component({
  selector: 'app-ask-or-answer',
  templateUrl: './ask-or-answer.component.html',
  styleUrls: ['./ask-or-answer.component.css']
})
export class AskOrAnswerComponent implements OnInit {

  constructor(private generalService: GeneralService, private router: Router) { }
  rotingToCat(){
    this.generalService.asksQuestion = false;
    this.router.navigateByUrl("/category")
  }

  ngOnInit(): void {
  }

}
