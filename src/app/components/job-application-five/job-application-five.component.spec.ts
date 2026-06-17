import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationFiveComponent } from './job-application-five.component';

describe('JobApplicationFiveComponent', () => {
  let component: JobApplicationFiveComponent;
  let fixture: ComponentFixture<JobApplicationFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
