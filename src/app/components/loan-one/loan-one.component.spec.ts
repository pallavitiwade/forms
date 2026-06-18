import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanOneComponent } from './loan-one.component';

describe('LoanOneComponent', () => {
  let component: LoanOneComponent;
  let fixture: ComponentFixture<LoanOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
