import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-job-application-three',
  templateUrl: './job-application-three.component.html',
  styleUrls: ['./job-application-three.component.scss']
})
export class JobApplicationThreeComponent {

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
  
  @ViewChild('jobthree') jobthree!:NgForm
  
  onsubmit(){
    this.submit=true
  
    if(this.jobthree.invalid){
      return this.jobthree.control.markAllAsTouched()
    }
    console.log(this.jobthree.value);
  
    if(this.skillsubmit()){
      return
    }
    this.jobthree.reset
  
  }
  
  
    
  
  }
  


