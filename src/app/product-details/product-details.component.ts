import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Product } from '../product';
import { ProductService } from '../product.service';

import {CartService} from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product

  constructor(
    private route : ActivatedRoute,
    private cart: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(){
    const id = +this.route.snapshot.paramMap.get('productId');
    this.productService.getProduct(id)
      .subscribe(val => this.product = val)
  }
  addToCart(product){
    this.cart.addToCart(product);
    window.alert('เพิ่มสินค้าเรียบร้อยแล้ว');
  }

}