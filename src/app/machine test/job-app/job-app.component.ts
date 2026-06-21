import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-app',
  templateUrl: './job-app.component.html',
  styleUrls: ['./job-app.component.scss']
})
export class JobAppComponent {

  @ViewChild ('Job') Job!:NgForm
  skills={
    Html:false,
    css:false,
    javascript:false,
    Angular:false

  }
  skillsubmit():boolean{
    return Object.values(this.skills).some(skill=>skill)
  }

  // skills=['Html', 'css' ,'javascript' , 'javascript']
  onSubmitthree(){
    if(this.Job.valid){
      return this.Job.control.markAllAsTouched()
    }
    console.log(this.Job)
    console.log(this.Job.value)
  }
  

}
