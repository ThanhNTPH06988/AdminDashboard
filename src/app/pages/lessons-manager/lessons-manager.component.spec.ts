import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsManagerComponent } from './lessons-manager.component';

describe('LessonsManagerComponent', () => {
  let component: LessonsManagerComponent;
  let fixture: ComponentFixture<LessonsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
