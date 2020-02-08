import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AskOrAnswerComponent } from './ask-or-answer/ask-or-answer.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';



@NgModule({
  declarations: [ AppComponent, HelloComponent, SignInComponent, MainPanelComponent, AskOrAnswerComponent, AskAQuestionComponent],
  imports:      [ BrowserModule, FormsModule,
    AppRoutingModule
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
