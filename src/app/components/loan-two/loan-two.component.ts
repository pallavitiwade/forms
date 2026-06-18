import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loan-two',
  templateUrl: './loan-two.component.html',
  styleUrls: ['./loan-two.component.scss']
})
export class LoanTwoComponent {
  PANNumber!:string
  @ViewChild('loantwo') loantwo!:NgForm
   onsubmit(){
      if(this.loantwo.invalid){
      return this.loantwo.control.markAllAsTouched()
    }
    console.log(this.loantwo.value)
    this.loantwo.reset()
   }

  

}
