import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOffersComponent } from './loan-offers.component';

describe('LoanOffersComponent', () => {
  let component: LoanOffersComponent;
  let fixture: ComponentFixture<LoanOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
