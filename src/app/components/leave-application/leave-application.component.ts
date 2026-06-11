import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {

    title='Employee Leave Application'
  @ViewChild('leavetwo') leavetwo!:NgForm;
  
  ToValue !:string
  FromValue !:string
  
  
  onSubmit(){
    if(this.leavetwo.valid){
      return this.leavetwo.control.markAllAsTouched()
    }
    console.log(this.leavetwo)
  console.log(this.leavetwo.value);
  
  
  
  }

}
