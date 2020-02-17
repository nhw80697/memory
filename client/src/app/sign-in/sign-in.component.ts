import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DataCheckingNamesService } from '../data-checking-names.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

  constructor(public dataCheckingNamesService:DataCheckingNamesService) {
    this.dataCheckingNamesService.getUsers().subscribe(CheckSignIn => {console.log(CheckSignIn)});
   }

  

  ngOnInit() {
  }

}