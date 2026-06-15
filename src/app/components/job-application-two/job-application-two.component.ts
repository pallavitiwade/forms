import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-application-two',
  templateUrl: './job-application-two.component.html',
  styleUrls: ['./job-application-two.component.scss']
})
export class JobApplicationTwoComponent {
submit=false

Skills={
  Html:false,
  css:false,
  Javascript:false,
Angular:false
}
skillsubmit():boolean{
  return Object.values(this.Skills).some(skill=>skill)
}

title='job Application' 

@ViewChild('jobtwo') jobtwo!:NgForm

onsubmit(){
  this.submit=true

  if(this.jobtwo.invalid){
    return this.jobtwo.control.markAllAsTouched()
  }
  console.log(this.jobtwo.value);

  if(this.skillsubmit()){
    return
  }
  this.jobtwo.reset

}


  
}
