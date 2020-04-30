import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusManagerComponent } from './bonus-manager.component';

describe('BonusManagerComponent', () => {
  let component: BonusManagerComponent;
  let fixture: ComponentFixture<BonusManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
