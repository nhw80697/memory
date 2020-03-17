import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  question = "";
  answer = "";
  posts:any;
  constructor(private router: Router, private generalService: GeneralService) { }


  Answer(){
    
    this.generalService.viewQuestion().
    subscribe(
      (res) =>{
        console.log(res[0].addPost.question);
        this.posts = res;
    
  }
    )}


  

  ngOnInit(): void {
    this.Answer();
  }

}
