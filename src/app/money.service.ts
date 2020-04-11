import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Money } from './money';

const httpOption = {
    header: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable()
export class MoneyService {
  private upvoteURL = 'api/upvotes';

  constructor(
    private http: HttpClient
  ) { }

  getVote(id: number) {
    return this.http.get<Money>(this.upvoteURL + '/' + id);
  }

  updateVote(money: Money) {
    return this.http.post<Money>(this.upvoteURL, money);
  }
}