import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-std-registration',
  templateUrl: './std-registration.component.html',
  styleUrls: ['./std-registration.component.scss']
})
export class StdRegistrationComponent {

@ViewChild('std') std!:NgForm

gender=[
  {gen:'Female'},
  {gen:'Male'},
  {gen:'other'}
]

  onSubmit(){
if(this.std.valid){
  return this.std.control.markAllAsTouched()
}
console.log(this.std)
console.log(this.std.value)

  }

}
