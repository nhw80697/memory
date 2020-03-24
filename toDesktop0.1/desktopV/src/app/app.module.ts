import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FlipModule } from 'ngx-flip';
import {MatMenuModule} from '@angular/material/menu';


import { AppComponent } from './app.component';
import { AskOrAnswerComponent } from './ask-or-answer/ask-or-answer.component';
import { QuestionComponent } from './question/question.component';
import { QuestionAmricanComponent } from './question-amrican/question-amrican.component';
import { MessegeComponent } from './question/question.component';


import { GeneralService } from './general.service';
import { AnswerComponent } from './answer/answer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {path: '', component: AskOrAnswerComponent },
  {path: 'ask-or-answer' , component: AskOrAnswerComponent },
  {path: 'question' , component: QuestionComponent },
  {path: 'question-amrican' , component: QuestionAmricanComponent },
  {path: 'answer' , component: AnswerComponent },
  {path: 'category' , component: CategoryComponent },
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    AskOrAnswerComponent,
    QuestionComponent,
    QuestionAmricanComponent,
    AnswerComponent,
    CategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    NgbModule,
    FlipModule,
    MatMenuModule,
    
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
