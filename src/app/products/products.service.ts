import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';
import { Category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/productos';

    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/productos';

    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/productos/'+ productId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/productos/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/productos/' + productId;
    return this.httpClient.delete<Product>(productUrl); // return an observable
  }

  searchCategoryProducts(categoryId): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/categoryId=' + categoryId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  searchDateProducts(dateParam): Observable<Product>{
    const productUrl = 'https://vulnerabilidades-backend.herokuapp.com/api/date=' + dateParam;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

}
