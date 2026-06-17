import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-application-five',
  templateUrl: './job-application-five.component.html',
  styleUrls: ['./job-application-five.component.scss']
})
export class JobApplicationFiveComponent {

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
  
  @ViewChild('jobfive') jobfive!:NgForm
  
  onsubmit(){
    this.submit=true
  
    if(this.jobfive.invalid){
      return this.jobfive.control.markAllAsTouched()
    }
    console.log(this.jobfive.value);
  
    if(this.skillsubmit()){
      return
    }
    this.jobfive.reset
  
  }
  
  
    









 
}
