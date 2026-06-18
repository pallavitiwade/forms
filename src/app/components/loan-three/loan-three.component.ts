import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loan-three',
  templateUrl: './loan-three.component.html',
  styleUrls: ['./loan-three.component.scss']
})
export class LoanThreeComponent {

   PANNumber!:string
    @ViewChild('loanthree') loanthree!:NgForm
     onsubmit(){
        if(this.loanthree.invalid){
        return this.loanthree.control.markAllAsTouched()
      }
      console.log(this.loanthree.value)
      this.loanthree.reset()
     }
  

}
