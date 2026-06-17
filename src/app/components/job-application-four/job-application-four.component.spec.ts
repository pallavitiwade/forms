import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationFourComponent } from './job-application-four.component';

describe('JobApplicationFourComponent', () => {
  let component: JobApplicationFourComponent;
  let fixture: ComponentFixture<JobApplicationFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
