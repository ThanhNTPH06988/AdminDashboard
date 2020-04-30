import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsManagerComponent } from './levels-manager.component';

describe('LevelsManagerComponent', () => {
  let component: LevelsManagerComponent;
  let fixture: ComponentFixture<LevelsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
