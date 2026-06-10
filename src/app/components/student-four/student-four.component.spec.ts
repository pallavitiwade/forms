import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFourComponent } from './student-four.component';

describe('StudentFourComponent', () => {
  let component: StudentFourComponent;
  let fixture: ComponentFixture<StudentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
