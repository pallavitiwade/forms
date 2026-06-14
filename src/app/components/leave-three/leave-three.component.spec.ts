import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveThreeComponent } from './leave-three.component';

describe('LeaveThreeComponent', () => {
  let component: LeaveThreeComponent;
  let fixture: ComponentFixture<LeaveThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
