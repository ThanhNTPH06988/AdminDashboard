import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsAddComponent } from './lessons-add.component';

describe('LessonsAddComponent', () => {
  let component: LessonsAddComponent;
  let fixture: ComponentFixture<LessonsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
