import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoanOffersComponent } from './all-loan-offers.component';

describe('AllLoanOffersComponent', () => {
  let component: AllLoanOffersComponent;
  let fixture: ComponentFixture<AllLoanOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLoanOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLoanOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
