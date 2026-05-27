import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'td-forms';
  @ViewChild('signUp') signUp!:NgForm



   onSubmit(){
  //   if(this.signUp.valid){
  //     return
  //   }
    console.log(this.signUp)

console.log(this.signUp.value)
  }

}
