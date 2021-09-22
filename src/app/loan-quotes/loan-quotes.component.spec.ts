import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanQuotesComponent } from './loan-quotes.component';

describe('LoanQuotesComponent', () => {
  let component: LoanQuotesComponent;
  let fixture: ComponentFixture<LoanQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanQuotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
