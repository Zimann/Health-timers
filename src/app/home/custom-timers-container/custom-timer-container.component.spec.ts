import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomTimerContainerComponent } from './custom-timer-container.component';

describe('CustomTimerContainerComponent', () => {
  let component: CustomTimerContainerComponent;
  let fixture: ComponentFixture<CustomTimerContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTimerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTimerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
