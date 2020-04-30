import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnlsAddComponent } from './bnls-add.component';

describe('BnlsAddComponent', () => {
  let component: BnlsAddComponent;
  let fixture: ComponentFixture<BnlsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnlsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnlsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
