import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp-leave',
  templateUrl: './emp-leave.component.html',
  styleUrls: ['./emp-leave.component.scss']
})
export class EmpLeaveComponent {
  title='Employee Leave Application'
@ViewChild('leave') leave!:NgForm;

ToValue !:string
FromValue !:string


onSubmit(){
  if(this.leave.valid){
    return this.leave.control.markAllAsTouched()
  }
  console.log(this.leave)
console.log(this.leave.value);



}
}
