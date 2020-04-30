import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusAddComponent } from './bonus-add.component';

describe('BonusAddComponent', () => {
  let component: BonusAddComponent;
  let fixture: ComponentFixture<BonusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
