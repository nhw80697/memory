import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { AskOrAnswerComponent } from './ask-or-answer/ask-or-answer.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';

import { DataCheckingNamesService } from './data-checking-names.service';
import { MainBarComponent } from './main-bar/main-bar.component';

@NgModule({
  declarations: [ AppComponent, HelloComponent, SignInComponent, MainPanelComponent, AskOrAnswerComponent, AskAQuestionComponent, MainBarComponent],
  imports:      [ BrowserModule, FormsModule,
    AppRoutingModule, HttpClientModule,
    ],
    providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
