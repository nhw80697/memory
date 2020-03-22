import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";
import { GeneralService } from '../general.service';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'ש"ס',
    children: [
      {name: 'זרעים',
      children: [
        {name: 'ברכות'}
      ]
    },
    {name: 'מועד',
      children: [
        {name: 'שבת'},
        {name: 'עירובין'},
        {name: 'פסחים'},
        {name: 'שקלים'},
        {name: 'ראש השנה'},
        {name: 'יומא'},
        {name: 'סוכה'},
        {name: 'ביצה'},
        {name: 'תענית'},
        {name: 'מגילה'},
        {name: 'מועד קטן'},
        {name: 'חגיגה'}
      ]
    },
    {name: 'נשים',
      children: [
        {name: 'יבמות'},
        {name: 'כתובות'},
        {name: 'נדרים'},
        {name: 'נזיר'},
        {name: 'סוטה'},
        {name: 'גיטין'},
        {name: 'קידושין'},
      ]
    },
    {name: 'נזיקין',
      children: [
        {name: 'בבא קמא'},
        {name: 'בבא מציעא'},
        {name: 'בבא בתרא'},
        {name: 'סנהדרין'},
        {name: 'מכות'},
        {name: 'שבועות'},
        {name: 'עבודה זרה'},
        {name: 'הוריות'},
      ]
    },
    ]
  }, {
    name: 'הלכה',
    children: [
      {
        name: 'טור ובית יוסף',
        children: [
          {name: 'אורח חיים'},
          {name: 'יורה דעה'},
        ]
      }, {
        name: 'שולחן ערוך',
        children: [
          {name: 'אורח חיים'},
          {name: 'יורה דעה'},
        ]
      },
    ]
  },
];

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
 
  
  selectCat(e){
    if(this.generalService.asksQuestion == true){
      this.generalService.category = e.target.name; 
      console.log(e.target);
      this.router.navigateByUrl("/question")
    }else{
      this.generalService.questionsToShow.cat = e.target.name;
      this.router.navigateByUrl("/answer")
    }
   
  }


  ngOnInit(): void {

  }

}

