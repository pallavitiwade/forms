import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanThreeComponent } from './loan-three.component';

describe('LoanThreeComponent', () => {
  let component: LoanThreeComponent;
  let fixture: ComponentFixture<LoanThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
