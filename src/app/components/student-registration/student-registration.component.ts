import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit {

@ViewChild('register') register!:NgForm;

gender=[
  {gen:'Female'},
  {gen:'Male'},
  {gen:'other'}
]
  constructor() { }

  ngOnInit(): void {

  }
onSubmit(){
  console.log(this.register)
}







}
