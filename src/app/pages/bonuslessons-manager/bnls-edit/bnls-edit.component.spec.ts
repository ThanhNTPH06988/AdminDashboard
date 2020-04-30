import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnlsEditComponent } from './bnls-edit.component';

describe('BnlsEditComponent', () => {
  let component: BnlsEditComponent;
  let fixture: ComponentFixture<BnlsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnlsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnlsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
