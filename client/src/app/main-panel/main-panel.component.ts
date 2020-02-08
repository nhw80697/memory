import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
ShowSginIn = true;
@Output() SginIn = new EventEmitter();


onClickSginIn(){
  this.ShowSginIn = true;
  this.SginIn.emit(this.ShowSginIn)
}

  constructor() { }

  ngOnInit() {
  }

}