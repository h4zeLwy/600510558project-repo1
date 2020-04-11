import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AuthService }  from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private route : Router
  ) { }

  ngOnInit() {
  }

  register(email,password,cpassword){
    if(password == cpassword){
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(user => {
      }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
      });
      window.alert("Register Success")
      this.route.navigate(['/login']);
    }else{
      window.alert("Password does not match.")
    }
  }

}