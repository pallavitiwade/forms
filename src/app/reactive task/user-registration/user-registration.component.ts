import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
title='User REgistration Form'

  onuserForm!:FormGroup
  constructor() { }

  ngOnInit(): void {

  }
onuser(){
  console.log(this.onuserForm)
       console.log(this.onuserForm.getRawValue())

}

createUserForm(){
  this.onuserForm=new FormGroup({
    FirstName:new FormControl(null)
  })




}







}
