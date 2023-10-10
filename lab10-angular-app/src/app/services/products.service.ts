import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any

  constructor(private http: HttpClient) { }

  addProduct(productData:any){
    return this.http.post<any>('http://localhost:3000/products/add', productData)
      .pipe(map(data => {
        return data;
      }));
  }

  getProducts(){
    return this.http.get<any>('http://localhost:3000/products/get')
      .pipe(map(data => {
        if(data){
          this.products = data;
        }
        return this.products;
      }));
  }
}
