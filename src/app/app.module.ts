import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StudentTwoComponent } from './components/student-two/student-two.component';
import { StudentThreeComponent } from './components/student-three/student-three.component';
import { StudentFourComponent } from './components/student-four/student-four.component';
import { StudentFiveComponent } from './components/student-five/student-five.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    StudentRegistrationComponent,
    StudentTwoComponent,
    StudentThreeComponent,
    StudentFourComponent,
    StudentFiveComponent
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
