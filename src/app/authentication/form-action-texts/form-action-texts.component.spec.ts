import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormActionTextsComponent } from './form-action-texts.component';

describe('FormActionTextsComponent', () => {
  let component: FormActionTextsComponent;
  let fixture: ComponentFixture<FormActionTextsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormActionTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormActionTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
