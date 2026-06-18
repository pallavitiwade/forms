import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTwoComponent } from './loan-two.component';

describe('LoanTwoComponent', () => {
  let component: LoanTwoComponent;
  let fixture: ComponentFixture<LoanTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
