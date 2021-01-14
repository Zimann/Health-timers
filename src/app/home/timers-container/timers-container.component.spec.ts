import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimersContainerComponent } from './timers-container.component';

describe('TimersContainerComponent', () => {
  let component: TimersContainerComponent;
  let fixture: ComponentFixture<TimersContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
