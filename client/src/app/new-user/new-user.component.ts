import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { DataCheckingNamesService } from '../data-checking-names.service';
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
    password: ""
  };


  message = "";
  constructor(public dataCheckingNamesService:DataCheckingNamesService,private router: Router) { }

  onCreateAnAccount(){
    this.dataCheckingNamesService.createAnAccount(this.user)
    .subscribe(
      (res) =>{
        console.log("הצליח!");
        if(res == true){this.message = "חשבונך נוצר בהצלחה!"}
      } 
    );
  }

  ngOnInit(): void {
  }

}
