import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../const/validators';
import { EmpIdValidator } from '../validators/empIdValidators';
import { COUNTRIES_META_DATA } from '../const/country';
import { Icountry } from '../model/country';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  title = 'reactive-form';
  onSignUpForm !: FormGroup; //undefined
  genderArr = ["Female", "Male", "others"]
  countryArr: Array<Icountry> = COUNTRIES_META_DATA

  userDetails={
    
confirmPassword: "zaq1ZAQ!",
currentAddress: 
{country: 'Aland', state: 'Maharashtra', city: 'nanded', pincode: '431136'},
email:"tiwdepallavi97@gmail.com",
empId: "A123",
gender:"Female",
isAddSome:true,
password:"zaq1ZAQ!",
permanentAddress: 
{country: 'Aland', state: 'Maharashtra', city: 'nanded', pincode: '431136'},
skills:['htmll', 'java'],
userName:"pallavi"

    
  }
  constructor() {

  }
  ngOnInit(): void {
    this.createSignUpForm()
    this.isAddSameHandler()
    this.onSkillAdd()
    this.addDependant()
    this.addDependant()
    this.permeantAddressHandler()
    this.setConfirmPassState()

    this.f['confirmPassword'].valueChanges
      .subscribe(confirmPassVal => {
        let passVal = this.f['password'].value
        if (passVal === confirmPassVal) {
          this.f['confirmPassword'].setErrors(null)
        } else {
          this.f['confirmPassword'].setErrors({
            passMissMatch: `Value of Password and Confirm password should be same`,

          })
        }
      })

  }
 onEdit(){
    this.onSignUpForm.patchValue(this.userDetails)
    this.userDetails.skills.forEach(skill=>{
   let control=new FormControl(skill)
      this.skillsArr.push(control)

    })
   }



  setConfirmPassState() {
    this.f['password'].valueChanges
      .subscribe(val => {
        if (this.f['password'].valid) {
          this.f['confirmPassword'].enable()
        } else {
          this.f['confirmPassword'].disable()


        }
      })
  }

  permeantAddressHandler() {
    this.f['isAddSome'].valueChanges.subscribe(val => {
      if (val) {
        let currAdd = this.f['currentAddress'].value
        this.f['permanentAddress'].patchValue(currAdd)
        this.f['permanentAddress'].disable()

      } else {
        this.f['permanentAddress'].reset()
        this.f['permanentAddress'].enable()
      }
    })

  }
  isAddSameHandler() {
    this.f['currentAddress'].valueChanges
      .subscribe(res => {
        if (this.f['currentAddress'].valid) {
          this.f['isAddSome'].enable()
        } else {
          this.f['isAddSome'].disable()
          this.f['isAddSome'].reset()
        }
      })
  }
  onSignUp() {
    console.log(this.onSignUpForm)
    //console.log(this.onSignUpForm.value)//It does not give disbled control value
     console.log(this.onSignUpForm.getRawValue())
  }

  createSignUpForm() {
    this.onSignUpForm = new FormGroup({
      userName: new FormControl(null,
        [Validators.required, Validators.minLength(5), Validators.maxLength(9), Validators.pattern(CustomRegex.onlyText)]),
      email: new FormControl(
        null,
        [Validators.required, Validators.pattern(CustomRegex.email)]),
      empId: new FormControl(null,
        [Validators.required, EmpIdValidator.isEmpValid]),

      gender: new FormControl("Female"),

      currentAddress: new FormGroup({
        country: new FormControl('Aland', Validators.required),
        state: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        pincode: new FormControl(null, Validators.required)

      }),
      permanentAddress: new FormGroup({
        country: new FormControl('Angola', Validators.required),
        state: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        pincode: new FormControl(null, Validators.required)

      }),

      isAddSome: new FormControl({ value: false, disabled: true }),
      skills: new FormArray([]),
      dependents: new FormArray([]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.password)
      ]),
      confirmPassword: new FormControl({ value: null, disabled: true })



    })
  }

  get skillsArr() {
    return this.onSignUpForm.get('skills') as FormArray
  }

  get dependsArr() {
    return this.onSignUpForm.get('dependents') as FormArray

  }

  onSkillAdd() {
    if (this.skillsArr.valid && this.skillsArr.length < 5) {
      let skillControl = new FormControl(null, Validators.required)
      this.skillsArr.push(skillControl)
    }
  }

  onskillRemove(i: number) {
    console.log(i)
    this.skillsArr.removeAt(i)
  }

  addDependant() {
    //  if(this.dependsArr.valid && this.dependsArr.length < 3){
    let dependents = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      realtionship: new FormControl(null, Validators.required),
      citizenship: new FormControl(null, Validators.required),
      isTreavelwithYou: new FormControl(true, Validators.required)
    })
    this.dependsArr.push(dependents)
  }

  //}
  onDependentRemove(i: number) {
    this.dependsArr.removeAt(i)



  }
  get f() {
    return this.onSignUpForm.controls//object {username,email}
  }

  get userName() {
    return this.onSignUpForm.get('userName') as FormControl
  }

}



