import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private route: Router,
  ) { }

  isLoggedIn;
  email;

  ngOnInit() {
    this.auth.isLoggedIn.subscribe(val => this.isLoggedIn = val);
    if (localStorage.getItem("isLoggedIn")==="true") {
      this.isLoggedIn = true;
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.email = user.email;
          this.isLoggedIn = true;
        }
      });
    }
    this.auth.callAuth.subscribe(
      () => {
        this.auth.isLoggedIn.subscribe(val => this.isLoggedIn = val);
        if (localStorage.getItem("isLoggedIn")==="true") {
          this.isLoggedIn = true;
          this.afAuth.auth.onAuthStateChanged(user => {
            if (user) {
              this.email = user.email;
              this.isLoggedIn = true;
            }
          });
        }
      }
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.auth.refreshAuth();
    this.auth.logout();
    this.auth.isLoggedIn.subscribe(val => this.isLoggedIn = val);
    if (localStorage.getItem("isLoggedIn")==="false") {
      this.isLoggedIn = false;
      this.email = "";
    }
    this.route.navigate(['']);
  }

}