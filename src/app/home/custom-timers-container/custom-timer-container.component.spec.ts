import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimerContainerComponent } from './custom-timer-container.component';

describe('CustomTimerContainerComponent', () => {
  let component: CustomTimerContainerComponent;
  let fixture: ComponentFixture<CustomTimerContainerComponent>;

  beforeEach(async(() => {
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
