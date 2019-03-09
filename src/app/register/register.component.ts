import { Component, OnInit } from '@angular/core';
import { ServAuthService } from '../services/serv-auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public servAuthUser : ServAuthService ) { }
  registerForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    pass:new FormControl(null,Validators.required),
    passconf:new FormControl(null,Validators.required)

   } )
   
  get f() { return this.registerForm.controls; }
  
  register()
  {
    this.servAuthUser.register(this.registerForm.controls.email.value ,this.registerForm.controls.pass.value)
  }

  
  
  ngOnInit() {
  }

}
