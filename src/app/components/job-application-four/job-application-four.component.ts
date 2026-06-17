import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-application-four',
  templateUrl: './job-application-four.component.html',
  styleUrls: ['./job-application-four.component.scss']
})
export class JobApplicationFourComponent {

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
  
  @ViewChild('jobFour') jobFour!:NgForm
  
  onsubmit(){
    this.submit=true
  
    if(this.jobFour.invalid){
      return this.jobFour.control.markAllAsTouched()
    }
    console.log(this.jobFour.value);
  
    if(this.skillsubmit()){
      return
    }
    this.jobFour.reset
  
  }
  
  
 

}
