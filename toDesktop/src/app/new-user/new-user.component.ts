import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { MainService } from '../main.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };


  message = "";
  constructor(public mainService:MainService,private router: Router) { }

  onCreateAnAccount(){
    
      if (this.user.name == "" || this.user.password == "" || this.user.password2 == "" || this.user.email == "") {
          this.message = "אחד מהשדות או יותר בטופס חסרים"
      }else{
        this.mainService.createAnAccount(this.user)
            .subscribe(
              (res) =>{
                console.log("הצליח!");
                if(res == true){this.message ="חשבונך נוצר בהצלחה! תיכף הנך צולל פנימה..."}
                setTimeout(() => {
                  this.router.navigateByUrl("/AskOrAnswer")
                }, 3000);
              } 
            );
      }
    };


    
  

  onKeyPas2(event) { 
    if (this.user.password != this.user.password2){
      this.message = "הסיסמאות אינן תואמות" ;
    }else{this.message = ""};
    
  }


  ngOnInit(): void {}

  }
