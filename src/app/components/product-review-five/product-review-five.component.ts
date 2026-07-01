import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-review-five',
  templateUrl: './product-review-five.component.html',
  styleUrls: ['./product-review-five.component.scss']
})
export class ProductReviewFiveComponent {
@ViewChild('productfive') productfive!:NgForm;

 onSubmitfive(){
  if(this.productfive.invalid){
    return this.productfive.control.markAllAsTouched();
  }
  this.productfive.resetForm()

 }
  
}
