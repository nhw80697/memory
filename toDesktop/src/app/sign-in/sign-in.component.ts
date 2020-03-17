import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { MainService } from '../main.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

  user = {
    name: "",
    password: ""
  };
   
  
  warning = "";

  constructor(public mainService:MainService,private router: Router) {}

   onSginIn(){

    this.mainService.checUser(this.user)
      .subscribe(
        (res) => {console.log(res);
          if(res['BOOL'] == false){
          this.warning = "שם המשתמש או הסיסמא שגויים";}
          else
          {this.warning = "";
          this.mainService.nameInTheBar += res['userName'];
          this.mainService.showUserName = true;
          console.log( this.mainService.nameInTheBar);
          this.router.navigateByUrl("/AskOrAnswer");}
        } 
      );
    }

  ngOnInit() {
  }

}