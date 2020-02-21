import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { DataCheckingNamesService } from '../data-checking-names.service';
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

  constructor(public dataCheckingNamesService:DataCheckingNamesService,private router: Router) {}

   onSginIn(){

    this.dataCheckingNamesService.checUser(this.user)
      .subscribe(
        (res) => {console.log(res);
          if(res == false){
          this.warning = "שם המשתמש או הסיסמא שגויים";}
          else
          {this.warning = "";
          this.router.navigateByUrl("/AskOrAnswer");}
        } 
      );
    }

  ngOnInit() {
  }

}