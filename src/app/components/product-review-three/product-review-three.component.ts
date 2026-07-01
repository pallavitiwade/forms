import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-review-three',
  templateUrl: './product-review-three.component.html',
  styleUrls: ['./product-review-three.component.scss']
})
export class ProductReviewThreeComponent {
@ViewChild('productthree') productthree!:NgForm;

 onSubmithree(){
  if(this.productthree.invalid){
    return this.productthree.control.markAllAsTouched();
  }
  this.productthree.resetForm()

 }

  

}
