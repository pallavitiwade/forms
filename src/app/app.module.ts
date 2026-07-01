import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { EmpLeaveComponent } from './components/emp-leave/emp-leave.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { LoanTwoComponent } from './components/loan-two/loan-two.component';
import { ProductReviewComponent } from './components/product-review/product-review.component';
import { StdRegistrationComponent } from './machine test/std-registration/std-registration.component';
import { LeaveApplicationComponent } from './machine test/leave-application/leave-application.component';
import { JobAppComponent } from './machine test/job-app/job-app.component';
import { LoanComponent } from './machine test/loan/loan.component';
import { ProductComponent } from './machine test/product/product.component';
import { UserRegistrationComponent } from './reactive task/user-registration/user-registration.component';
import { ProductReviewThreeComponent } from './components/product-review-three/product-review-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    StudentRegistrationComponent,
    EmpLeaveComponent,
    JobApplicationComponent,
    LoanTwoComponent,
    ProductReviewComponent,
    StdRegistrationComponent,
    LeaveApplicationComponent,
    JobAppComponent,
    LoanComponent,
    ProductComponent,
    UserRegistrationComponent,
    ProductReviewThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
