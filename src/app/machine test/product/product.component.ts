import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
@ViewChild('product') product!:NgForm
user={
  rating:''
}

 onsubmitFive(){
if(this.product.valid){
  return this.product.control.markAllAsTouched()
}
console.log(this.product)
console.log(this.product.value)
 }
}
