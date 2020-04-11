import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { AuthService }  from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,
    private auth: AuthService,
  ) { }

  ngOnInit() {
  }

   login(email,password){
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
      this.auth.login();
      this.auth.refreshAuth();
      this.route.navigate(['/store']);
      }).catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage)
      });
  }

}