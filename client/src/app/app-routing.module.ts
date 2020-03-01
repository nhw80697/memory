import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AskOrAnswerComponent } from './ask-or-answer/ask-or-answer.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AskAQuestionAmericanComponent } from './ask-a-question-american/ask-a-question-american.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {path: '', component: MainPanelComponent },
  {path: 'MainPanelComponent', component: MainPanelComponent },
  {path: 'SginIn', component: SignInComponent},
  {path: 'AskOrAnswer', component: AskOrAnswerComponent},
  {path: 'ask-question', component: AskAQuestionComponent},
  {path: 'ask-question-amrican', component: AskAQuestionAmericanComponent},
  {path: 'signup', component: NewUserComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }