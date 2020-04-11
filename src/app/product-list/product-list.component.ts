import { Component } from '@angular/core';
import{ProductService} from '../product.service';
import {Product} from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Product[];
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  share() {
    window.alert('Thank you for buying');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/