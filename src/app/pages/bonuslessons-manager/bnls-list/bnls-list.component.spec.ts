import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnlsListComponent } from './bnls-list.component';

describe('BnlsListComponent', () => {
  let component: BnlsListComponent;
  let fixture: ComponentFixture<BnlsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BnlsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnlsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
