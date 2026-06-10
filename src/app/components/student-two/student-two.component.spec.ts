import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTwoComponent } from './student-two.component';

describe('StudentTwoComponent', () => {
  let component: StudentTwoComponent;
  let fixture: ComponentFixture<StudentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
