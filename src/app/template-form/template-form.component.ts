import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
title = 'td-forms';
  @ViewChild('signUp') signUp!:NgForm;

  
mocArr=[
    {contactMode:'Phone'},
     {contactMode:'Email'},
    {contactMode:'Fax'}

  ]

  userDetails={
  Email: "tiwdepallavi97@gmail.com",
Username:"pallavi tiwade",
answer:"i like to read  a books",
isSubScribed:true,
modeofContact: "Email",
secreatQuestions:"favBook"
  }



   onSubmit(){
  if(this.signUp.valid){
    this.signUp.form.markAllAsTouched()
      return

   }
    console.log(this.signUp)
console.log(this.signUp.value)
  }

onEdit(){
  this.signUp.form.patchValue(this.userDetails)
}

}


  


