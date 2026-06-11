import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { EmpLeaveComponent } from './components/emp-leave/emp-leave.component';
import { LeaveApplicationComponent } from './components/leave-application/leave-application.component';
import { LeaveThreeComponent } from './components/leave-three/leave-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    StudentRegistrationComponent,
    EmpLeaveComponent,
    LeaveApplicationComponent,
    LeaveThreeComponent,
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
