import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

@ViewChild('register') register!:NgForm;

student={
Address:"bajaj nagar , nanded",
Course:"BCA",
Email:"tiwdepallavi97@gmail.com",
FullName:"Pallavi Tiwde",
MobileNumber:"8378974596",
check:true,
gender:"Female"
}

gender=[
  {gen:'Female'},
  {gen:'Male'},
  {gen:'other'}
]
  constructor() { }

  ngOnInit(): void {

  }

onSubmit(){
  if(this.register.valid){
    return this.register.control.markAllAsTouched()
  }
  console.log(this.register)
console.log(this.register.value);


}


}
