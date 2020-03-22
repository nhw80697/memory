import { Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  
  
  
  constructor(private router: Router,
              private generalService: GeneralService,
              public dialog: MatDialog){}
             

  openDialog() {
    this.dialog.open(MessegeComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
  
  question = "";
  answer = "";
  category = this.generalService.category;
objQ = {
  question: "",
  answer: "",
  cat: this.category
}
  handleChange(){
    this.router.navigateByUrl("/question-amrican")
  }

  Question(){
    this.objQ.question = this.question;
    this.objQ.answer = this.answer; 
    this.generalService.addQuestion(this.objQ).
    subscribe(
      (res) =>{}
    );
    this.question = "";
    this.answer = "";
      this.openDialog();
  }
    

  ngOnInit(): void {

  }

}
@Component({
  selector: 'messege',
  templateUrl: 'messege.html',
})
export class MessegeComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<MessegeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  newQues(): void {
    this.dialogRef.close();
    this.router.navigateByUrl("/question")
    
  }

  returnMenu(){
    this.dialogRef.close();
    this.router.navigateByUrl("/ask-or-answer")
  }


}