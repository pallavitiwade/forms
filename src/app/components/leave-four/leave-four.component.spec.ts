import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFourComponent } from './leave-four.component';

describe('LeaveFourComponent', () => {
  let component: LeaveFourComponent;
  let fixture: ComponentFixture<LeaveFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
