import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimerColumnComponent } from './timer-column.component';

describe('TimerColumnComponent', () => {
  let component: TimerColumnComponent;
  let fixture: ComponentFixture<TimerColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
