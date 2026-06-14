import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-five',
  templateUrl: './leave-five.component.html',
  styleUrls: ['./leave-five.component.scss']
})
export class LeaveFiveComponent {
 title='Employee Leave Application'
  @ViewChild('leaveFive') leaveFive!:NgForm;
  
  ToValue !:string
  FromValue !:string
  
  
  onSubmit(){
    if(this.leaveFive.valid){
      return this.leaveFive.control.markAllAsTouched()
    }
    console.log(this.leaveFive)
  console.log(this.leaveFive.value);
  
 

}
}
  

