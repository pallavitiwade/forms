import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-review-two',
  templateUrl: './product-review-two.component.html',
  styleUrls: ['./product-review-two.component.scss']
})
export class ProductReviewTwoComponent {
  @ViewChild('productwo') productwo!:NgForm;
  
   onSubmittwo(){
    if(this.productwo.invalid){
      return this.productwo.control.markAllAsTouched();
    }
    this.productwo.resetForm()
  
   }



 

}
