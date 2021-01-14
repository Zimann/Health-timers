import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateTimerComponent } from './create-timer.component';

describe('CreateTimerComponent', () => {
  let component: CreateTimerComponent;
  let fixture: ComponentFixture<CreateTimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
