import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationThreeComponent } from './job-application-three.component';

describe('JobApplicationThreeComponent', () => {
  let component: JobApplicationThreeComponent;
  let fixture: ComponentFixture<JobApplicationThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobApplicationThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
