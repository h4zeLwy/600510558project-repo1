import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  money: money[];

  constructor(
    private firestore: AngularFirestore
  ) { }

  

  addUpvote(tweetUID: string, username: string) {
    const vote = {
      tweetUID,
      username
    }
    return this.firestore.collection('upvote').add(vote);
  }

  deleteUpvote(id: string) {
    return this.firestore.collection('upvote').doc(id).delete();
  }

  getUpvote(id: string) {
    return this.firestore.collection('upvote', ref =>
    ref.where('tweetUID', '==', id)).snapshotChanges();
  }
}