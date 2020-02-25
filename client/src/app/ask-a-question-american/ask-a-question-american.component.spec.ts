import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAQuestionAmericanComponent } from './ask-a-question-american.component';

describe('AskAQuestionAmericanComponent', () => {
  let component: AskAQuestionAmericanComponent;
  let fixture: ComponentFixture<AskAQuestionAmericanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAQuestionAmericanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAQuestionAmericanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
