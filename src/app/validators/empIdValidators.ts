import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmpIdValidator{
   static isEmpValid(control:AbstractControl): null | ValidationErrors{
        let val= control.value as string
        if(!val){
            return null
        }
        
      let regExp= /^[A-Z]\d{3}$/
      let isvalid = regExp.test(val)

      if(isvalid){
        return null
      }else{
        return{
            invalidEmpId:`EMP id must be start with Alphabet and end with 3 numbers`
        }
      }
    }
}