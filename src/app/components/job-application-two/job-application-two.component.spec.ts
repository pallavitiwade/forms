import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationTwoComponent } from './job-application-two.component';

describe('JobApplicationTwoComponent', () => {
  let component: JobApplicationTwoComponent;
  let fixture: ComponentFixture<JobApplicationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
