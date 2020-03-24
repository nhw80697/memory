import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { pages, TREE_DATA } from '../categorys'

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}



/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  
  constructor(private router: Router, private generalService: GeneralService) { 
    this.dataSource.data = TREE_DATA;
    
    

  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
 
  category = "";
  page = "";
  copyPages = [];

  selectCat(e){
      this.generalService.category = e.target.name; 
      this.category = e.target.name;
      this.generalService.questionsToShow.cat = e.target.name;
      if(this.generalService.category == "ברכות"){this.copyPages = pages.slice(0,63)}else
      if(this.generalService.category == "שבת"){this.copyPages = pages.slice(0,156)}else
      if(this.generalService.category == "עירובין"){this.copyPages = pages.slice(0,104)}else
      if(this.generalService.category == "פסחים"){this.copyPages = pages.slice(0,120)}else
      if(this.generalService.category == "ראש השנה"){this.copyPages = pages.slice(0,34)}else
      if(this.generalService.category == "יומא"){this.copyPages = pages.slice(0,87)}else
      if(this.generalService.category == "סוכה"){this.copyPages = pages.slice(0,55)}else
      if(this.generalService.category == "ביצה"){this.copyPages = pages.slice(0,39)}else
      if(this.generalService.category == "תענית"){this.copyPages = pages.slice(0,30)}else
      if(this.generalService.category == "מגילה"){this.copyPages = pages.slice(0,31)}else
      if(this.generalService.category == "מועד קטן"){this.copyPages = pages.slice(0,28)}else
      if(this.generalService.category == "חגיגה"){this.copyPages = pages.slice(0,26)}else
      if(this.generalService.category == "יבמות"){this.copyPages = pages.slice(0,121)}else
      if(this.generalService.category == "כתובות"){this.copyPages = pages.slice(0,111)}else
      if(this.generalService.category == "נדרים"){this.copyPages = pages.slice(0,90)}else
      if(this.generalService.category == "נזיר"){this.copyPages = pages.slice(0,65)}else
      if(this.generalService.category == "גיטין"){this.copyPages = pages.slice(0,89)}else
      if(this.generalService.category == "קידושין"){this.copyPages = pages.slice(0,81)}else
      if(this.generalService.category == "בבא קמא"){this.copyPages = pages.slice(0,118)}else
      if(this.generalService.category == "בבא מציעא"){this.copyPages = pages.slice(0,118)}else
      if(this.generalService.category == "בבא בתרא"){this.copyPages = pages.slice(0,175)}else
      if(this.generalService.category == "סנהדרין"){this.copyPages = pages.slice(0,112)}else
      if(this.generalService.category == "מכות"){this.copyPages = pages.slice(0,23)}else
      if(this.generalService.category == "עבודה זרה"){this.copyPages = pages.slice(0,75)}else
      if(this.generalService.category == "הוריות"){this.copyPages = pages.slice(0,12)}else
      if(this.generalService.category == "זבחים"){this.copyPages = pages.slice(0,119)}else
      if(this.generalService.category == "מנחות"){this.copyPages = pages.slice(0,109)}else
      if(this.generalService.category == "חולין"){this.copyPages = pages.slice(0,141)}else
      if(this.generalService.category == "בכורות"){this.copyPages = pages.slice(0,60)}else
      if(this.generalService.category == "ערכין"){this.copyPages = pages.slice(0,33)}else
      if(this.generalService.category == "תמורה"){this.copyPages = pages.slice(0,33)}else
      if(this.generalService.category == "כריתות"){this.copyPages = pages.slice(0,27)}else
      if(this.generalService.category == "מעילה"){this.copyPages = pages.slice(0,21)}else
      if(this.generalService.category == "תמיד"){this.copyPages = pages.slice(0,8)}else
      if(this.generalService.category == "נידה"){this.copyPages = pages.slice(0,72)}

  }

  selectPage(e){
    this.generalService.page = e.target.name; 
    this.page = e.target.name;
    this.generalService.questionsToShow.sub = e.target.name;
    if(this.generalService.asksQuestion == true){
      this.router.navigateByUrl("/question")
    }else{
      this.router.navigateByUrl("/answer")
    }
  }


  ngOnInit(): void {

  }

}

