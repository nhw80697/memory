import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-ask-a-question-american',
  templateUrl: './ask-a-question-american.component.html',
  styleUrls: ['./ask-a-question-american.component.css']
})
export class AskAQuestionAmericanComponent implements OnInit {
  warning = "";
  countAnswer = 1;
    @ViewChild('clone') template;

    // Where to insert the cloned content
    @ViewChild('container', {read:ViewContainerRef}) container;

    constructor(private resolver:ComponentFactoryResolver,private router: Router){}
    //פונקציה למעבר לשאלה רגילה
    handleChange(){
      this.router.navigateByUrl("/ask-question");
  }
  //פונקציה להוספת תשובות
    cloneTemplate(){
        
        this.countAnswer++;
        if(this.countAnswer > 7){
          this.warning = "לא ניתן ליצור יותר מ7 תשובות עבור שאלה אחת!";
          setTimeout(() => {this.warning = ""},1000)
        }
        else{this.container.createEmbeddedView(this.template);}
    }

    

  ngOnInit(): void {
  }

}
