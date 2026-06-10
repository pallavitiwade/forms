import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-five',
  templateUrl: './student-five.component.html',
  styleUrls: ['./student-five.component.scss']
})
export class StudentFiveComponent implements OnInit {

  @ViewChild('registerFive') registerFive!:NgForm;
    
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
      if(this.registerFive.valid){
        return this.registerFive.control.markAllAsTouched()
      }
      console.log(this.registerFive)
    console.log(this.registerFive.value);
    
    
    }
    
    
    }
    
  