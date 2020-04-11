
import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = []
  sum;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems()
    this.sumPrice()
  }

  clearCart() {
    this.items = []
    this.items = this.cartService.clearCart()
    this.sum = 0
  }

  sumPrice() {
    this.sum = this.items.reduce(
      (acc,val) =>  acc + val.price
    , 0)
  }

}