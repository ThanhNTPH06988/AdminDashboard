import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsUpdateComponent } from './levels-update.component';

describe('LevelsUpdateComponent', () => {
  let component: LevelsUpdateComponent;
  let fixture: ComponentFixture<LevelsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
