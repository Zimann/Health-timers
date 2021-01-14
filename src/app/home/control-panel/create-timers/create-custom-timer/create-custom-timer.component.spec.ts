import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateCustomTimerComponent } from './create-custom-timer.component';

describe('CreateCustomTimerComponent', () => {
  let component: CreateCustomTimerComponent;
  let fixture: ComponentFixture<CreateCustomTimerComponent>;

  beforeEach(waitForAsync(() => {
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
