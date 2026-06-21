import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.scss']
})
export class LeaveApplicationComponent {
  @ViewChild('empleave')empleave!:NgForm
  FromValue!:number
onSubmittwo(){
  if(this.empleave.valid){
    return this.empleave.control.markAllAsTouched()
  }
  console.log(this.empleave)
  console.log(this.empleave.value)

}
 
}
