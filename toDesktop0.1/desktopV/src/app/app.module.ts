import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AskOrAnswerComponent } from './ask-or-answer/ask-or-answer.component';
import { QuestionComponent } from './question/question.component';
import { QuestionAmricanComponent } from './question-amrican/question-amrican.component';


import { GeneralService } from './general.service';
import { AnswerComponent } from './answer/answer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: AskOrAnswerComponent },
  {path: 'ask-or-answer' , component: AskOrAnswerComponent },
  {path: 'question' , component: QuestionComponent },
  {path: 'question-amrican' , component: QuestionAmricanComponent },
  {path: 'answer' , component: AnswerComponent },
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    AskOrAnswerComponent,
    QuestionComponent,
    QuestionAmricanComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
