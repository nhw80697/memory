import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AskOrAnswerComponent } from './ask-or-answer/ask-or-answer.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';

const appRoutes: Routes = [
  {path: '', component: MainPanelComponent },
  {path: 'SignIn', component: SignInComponent},
  {path: 'AskOrAnswer', component: AskOrAnswerComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }