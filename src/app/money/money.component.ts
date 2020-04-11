import { Component, OnInit, Input } from '@angular/core';
import { MoneyService } from './money.service';
import { AuthService } from '../auth.service';

import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit  {
  @Input() id: string;

  username: string;
  upvotes: Upvote[];

  isLoggedIn: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe( val => this.isLoggedIn = val);
    this.authService.username.subscribe( username => this.username = username );
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('username');
    }

    this.firebaseService.getUpvote(this.id).subscribe(val => {
    this.upvotes = val.map(e => {
      return {
        id: e.payload.doc.id,
        ...e.payload.doc.data()
      } as Upvote[]
      })
    });
  }

  isVoted() {
    let voted = false;
    if (this.upvotes !== undefined) {
      this.upvotes.map(vote => {
      if(vote.username === this.username) {
        voted = true;
      }
    })
    }
    return voted;
  }

  vote() {
    let unVote = false;
    this.upvotes.map(vote => {
      if(vote.username === this.username) {
        this.firebaseService.deleteUpvote(vote.id);
        unVote = true;
      }
    })

    if (!unVote) {
      this.firebaseService.addUpvote(this.id, this.username);
    }
  }
  
  status(): string {
    return this.isVoted() ? 'upvoted normal arrow' : 'arrow up';
  }
}