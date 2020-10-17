import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomTimerComponent } from './create-custom-timer.component';

describe('CreateCustomTimerComponent', () => {
  let component: CreateCustomTimerComponent;
  let fixture: ComponentFixture<CreateCustomTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
