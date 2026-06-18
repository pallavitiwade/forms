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
import { LoanThreeComponent } from './components/loan-three/loan-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    StudentRegistrationComponent,
    EmpLeaveComponent,
    JobApplicationComponent,
    LoanTwoComponent,
    LoanThreeComponent,
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
