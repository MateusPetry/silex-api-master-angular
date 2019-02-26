import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSingleComponent } from './events-single.component';

describe('EventsSingleComponent', () => {
  let component: EventsSingleComponent;
  let fixture: ComponentFixture<EventsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
