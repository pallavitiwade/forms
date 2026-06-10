import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-two',
  templateUrl: './student-two.component.html',
  styleUrls: ['./student-two.component.scss']
})
export class StudentTwoComponent implements OnInit {

  @ViewChild('registerTwo') registerTwo!:NgForm;
  
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
    if(this.registerTwo.valid){
      return this.registerTwo.control.markAllAsTouched()
    }
    console.log(this.registerTwo)
  console.log(this.registerTwo.value);
  
  
  }
  
  
  }
  


