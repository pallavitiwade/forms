import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-three',
  templateUrl: './student-three.component.html',
  styleUrls: ['./student-three.component.scss']
})
export class StudentThreeComponent implements OnInit {

  @ViewChild('registerThree') registerThree!:NgForm;
    
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
      if(this.registerThree.valid){
        return this.registerThree.control.markAllAsTouched()
      }
      console.log(this.registerThree)
    console.log(this.registerThree.value);
    
    
    }
    
    
    }
    
  
  
  