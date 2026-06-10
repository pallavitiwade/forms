import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentThreeComponent } from './student-three.component';

describe('StudentThreeComponent', () => {
  let component: StudentThreeComponent;
  let fixture: ComponentFixture<StudentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
