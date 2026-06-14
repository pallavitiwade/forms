import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFiveComponent } from './leave-five.component';

describe('LeaveFiveComponent', () => {
  let component: LeaveFiveComponent;
  let fixture: ComponentFixture<LeaveFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
