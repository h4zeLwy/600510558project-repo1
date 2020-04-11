import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Product } from './product';
import {Money} from './money';

@Injectable(
  {providedIn: 'root'}
)
export class InMemoryDataService implements InMemoryDbService{
  

  createDb(){
    const products: Product[] = [
      {id:0,name:'TEKKEN 7',price:'700'},
      {id:1,name:'CS:GO',price:'300'},
      {id:2,name:'Resident Evil 3 Remake',price:'1590'}
    ];
   const moneys: Money[] = [
      {
        id: 0,
        'Guest': 1
      }
    ]
    return {products,moneys};
  }


}