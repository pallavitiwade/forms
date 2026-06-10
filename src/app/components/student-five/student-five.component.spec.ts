import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFiveComponent } from './student-five.component';

describe('StudentFiveComponent', () => {
  let component: StudentFiveComponent;
  let fixture: ComponentFixture<StudentFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
