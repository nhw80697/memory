import { Component, OnInit } from '@angular/core';
import { DataCheckingNamesService } from '../data-checking-names.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent implements OnInit {
  
  
  constructor(public dataCheckingNamesService:DataCheckingNamesService) {}


  
  ngOnInit(): void {
  }

}
