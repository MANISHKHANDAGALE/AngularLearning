import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,NgIf,],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  profile= new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(24)]),
    email:new FormControl('',[Validators.required])
    })
    // Get(){
    //   console.log(this.name.value,this.password.value)
    // }
    // set(){
    //   this.name.setValue('abc')
    //   this.password.setValue('123')
    // }
    onSubmit(){
      console.log(this.profile.value);
      
    }
    set(){
      this.profile.setValue({
        name:'manish',
        password:'123',
        email:'xyz@gmail.com'
      })
    }
    get Name(){
      return this.profile.get('name')
    }
    get Password(){
      return this.profile.get('password')
    }
    get Email(){
      return this.profile.get('email')
    }
  
  }
