import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MainService } from '../main.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

}