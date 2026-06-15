import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent {
submit=false

Skills={
  Html:false,
  css:false,
  Javascript:false,
typescript:false
}
skillsubmit():boolean{
  return Object.values(this.Skills).some(skill=>skill)
}

title='job Application' 

@ViewChild('job') job!:NgForm

onsubmit(){
  this.submit=true

  if(this.job.invalid){
    return this.job.control.markAllAsTouched()
  }
  console.log(this.job.value);

  if(this.skillsubmit()){
    return
  }
  this.job.reset

}


  

}
