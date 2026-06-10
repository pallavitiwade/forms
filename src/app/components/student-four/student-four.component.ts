import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-four',
  templateUrl: './student-four.component.html',
  styleUrls: ['./student-four.component.scss']
})
export class StudentFourComponent implements OnInit {

  @ViewChild('registerFour') registerFour!:NgForm;
  
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
    if(this.registerFour.valid){
      return this.registerFour.control.markAllAsTouched()
    }
    console.log(this.registerFour)
  console.log(this.registerFour.value);
  
  
  }
  
  
  }
  