import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent {

 @ViewChild('product') product!:NgForm;

 onSubmit(){
  if(this.product.invalid){
    return this.product.control.markAllAsTouched();
  }
  this.product.resetForm()

 }

}
