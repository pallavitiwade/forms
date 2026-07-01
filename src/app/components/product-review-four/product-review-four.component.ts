import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-review-four',
  templateUrl: './product-review-four.component.html',
  styleUrls: ['./product-review-four.component.scss']
})
export class ProductReviewFourComponent{
  @ViewChild('productfour') productfour!:NgForm;
  
   onSubmitfour(){
    if(this.productfour.invalid){
      return this.productfour.control.markAllAsTouched();
    }
    this.productfour.resetForm()
  
   }

  
}
