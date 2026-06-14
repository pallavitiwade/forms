import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leave-four',
  templateUrl: './leave-four.component.html',
  styleUrls: ['./leave-four.component.scss']
})
export class LeaveFourComponent {
 title='Employee Leave Application'
  @ViewChild('leaveFour') leaveFour!:NgForm;
  
  ToValue !:string
  FromValue !:string
  
  
  onSubmit(){
    if(this.leaveFour.valid){
      return this.leaveFour.control.markAllAsTouched()
    }
    console.log(this.leaveFour)
  console.log(this.leaveFour.value);
  
 

}
}