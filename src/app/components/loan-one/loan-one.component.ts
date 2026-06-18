import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loan-one',
  templateUrl: './loan-one.component.html',
  styleUrls: ['./loan-one.component.scss']
})
export class LoanOneComponent {
PANNumber!:string
@ViewChild('loan') loan!:NgForm




 onsubmit(){
    if(this.loan.invalid){
    return this.loan.control.markAllAsTouched()
  }
  console.log(this.loan.value)
  this.loan.reset()




 }








}
