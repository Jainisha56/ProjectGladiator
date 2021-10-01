import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptloansComponent } from './acceptloans.component';

describe('AcceptloansComponent', () => {
  let component: AcceptloansComponent;
  let fixture: ComponentFixture<AcceptloansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptloansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
