import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  showMainPanel:boolean = true;
  ShowSginIn:boolean = false;
  showAskOrAnswer:boolean = false;
  

  clickShowSginIn(bool){
    this.ShowSginIn = bool;
    this.showMainPanel = !bool;
  }

  clickAskOrAnswer(bool){
    this.showAskOrAnswer = bool;
    this.showMainPanel = !bool;
    this.ShowSginIn = !bool;
  }
}
