import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
name:string = "";

@Output() SginIn = new EventEmitter();
@Output() askOrAnswer = new EventEmitter();


onClickReturn(){
  this.SginIn.emit(false)
}

onClickSginInYourAccount(){
  this.askOrAnswer.emit(true);
}

  constructor() { }

  ngOnInit() {
  }

}