import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app'; 
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServAuthService {

  constructor(public fireAuth : AngularFireAuth , public router : Router) { }

  login( email : string , pass :string)
  {
    this.fireAuth.auth.signInWithEmailAndPassword(email,pass).then((result)=>{
      console.log('You have been successfully register ')
      this.router.navigate(['/HomaPage'])
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
    });
    
  }
   
  register(email : string , pass :string)
  {
    this.fireAuth.auth.createUserWithEmailAndPassword(email,pass).then((result)=>
    {console.log('You have been successfully login ')
    window.alert(' You have been successfully registered!')
    this.router.navigate(['/HomaPage'])
    }).catch(function(error) {
      // Handle Errors here.parseSelectorToR3Selector
      var errorMessage = error.message;
      // ...
      console.log(errorMessage)
    });
  }

  loginWihfacebook()
  {
    return this.fireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then((result)=>{
      console.log('You have been successfully logged in ')
      this.router.navigate(['/HomaPage'])
    }).catch((error)=>{
      console.log(error)
    })
  }

  loginWithgoogle()
  {
  
  return this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result)=>{
      console.log('You have been successfully logged in ')
      this.router.navigate(['/HomaPage'])  
    }).catch((error)=>{
      console.log(error)
    })

  }
  logout()
  {
    this.fireAuth.auth.signOut().then((result)=> {
      console.log('You have been successfully logged out ')})
      .catch(function(error) {
        console.log(error)
    })
  }
}

