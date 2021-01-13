import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsSlideComponent } from './options-slide.component';

describe('OptionsSlideComponent', () => {
  let component: OptionsSlideComponent;
  let fixture: ComponentFixture<OptionsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
