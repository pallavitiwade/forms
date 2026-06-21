import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent {

@ViewChild('loan') loan!:NgForm

  onSubmitFour(){
    if(this.loan.valid){
      return this.loan.control.markAllAsTouched()
    }
    console.log(this.loan)
    console.log(this.loan.value)


  }

}
