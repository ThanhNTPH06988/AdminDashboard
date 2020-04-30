import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonuslessonsManagerComponent } from './bonuslessons-manager.component';

describe('BonuslessonsManagerComponent', () => {
  let component: BonuslessonsManagerComponent;
  let fixture: ComponentFixture<BonuslessonsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonuslessonsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonuslessonsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
