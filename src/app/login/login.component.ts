import { Component, OnInit } from '@angular/core';
import { ServAuthService } from '../services/serv-auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public servAuthUser : ServAuthService) { }
  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    pass:new FormControl(null,Validators.required)
   } )
   
  get f() { return this.loginForm.controls; }
  login()
  {
    this.servAuthUser.login(this.loginForm.controls.email.value ,this.loginForm.controls.pass.value)
  }
  loginWihfacebook()
  {
    this.servAuthUser.loginWihfacebook()
  }
  loginWithgoogle()
  
  {
    this.servAuthUser.loginWithgoogle()
  }

  ngOnInit() {
  }
}
