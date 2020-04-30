import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsAddComponent } from './levels-add.component';

describe('LevelsAddComponent', () => {
  let component: LevelsAddComponent;
  let fixture: ComponentFixture<LevelsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
