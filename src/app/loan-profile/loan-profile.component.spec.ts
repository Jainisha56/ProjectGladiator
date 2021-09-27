import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanProfileComponent } from './loan-profile.component';

describe('LoanProfileComponent', () => {
  let component: LoanProfileComponent;
  let fixture: ComponentFixture<LoanProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
