

import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import * as firebase from 'firebase/app';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  constructor(
    private firestore: AngularFirestore,
    private route: Router,
    private auth : AuthService,
    private afAuth : AngularFireAuth,
    private storageRef :AngularFireStorage,
  ) { this.id = this.route.url.split("/")[2] }

  news;
  id;
  commentAll;
  isLoggedIn=false;
  username;
  inputValue;

  @Input() comment;
  @Input() email;


  ngOnInit() {
    this.firestore.collection("news", ref => ref.where("id","==",this.id).limit(1)).snapshotChanges().subscribe(val => {
        this.news = val.map( e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
            }
          })
      });;

    this.firestore.collection("comments",ref=>ref.orderBy("date","desc")).snapshotChanges().subscribe(val => {
      this.commentAll = val.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
          }
        })
    });

    if (localStorage.getItem("isLoggedIn")==="true") {
      this.isLoggedIn = true;
      this.afAuth.auth.onAuthStateChanged(user => {
        if (user) {
          this.username = user.email;
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
              this.username = user.email;
              this.isLoggedIn = true;
            }
          });
        }
      }
    );
    
  }
}