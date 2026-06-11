import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-three',
  templateUrl: './leave-three.component.html',
  styleUrls: ['./leave-three.component.scss']
})
export class LeaveThreeComponent {

 title='Employee Leave Application'
   @ViewChild('leavethree') leavethree!:NgForm;
   
   ToValue !:string
   FromValue !:string
   
   
   onSubmit(){
     if(this.leavethree.valid){
       return this.leavethree.control.markAllAsTouched()
     }
     console.log(this.leavethree)
   console.log(this.leavethree.value);

}
}
