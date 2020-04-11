import { Injectable } from '@angular/core';
import { Product } from 'products';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private http : HttpClient,
  ) { }

  private productUrl = 'api/products';

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProduct(id:number) : Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url);
  }

}