import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, Pagination } from '../shared/models/product';
import { Observable } from 'rxjs';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';
import { ShopParams } from '../shared/models/shop-params';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseURL = 'https://localhost:44357/api/';

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams): Observable<Pagination<IProduct[]>>{
    let params = new HttpParams();
    if(shopParams.brandId > 0){
      params = params.append('brandId', shopParams.brandId);
    }

    if(shopParams.typeId){
      params = params.append('typeId', shopParams.typeId);
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sortBy', shopParams.sort)
    params = params.append('pageIndex', shopParams.pageNumber)
    params = params.append('pageSize', shopParams.pageSize)
    

    return this.http.get<Pagination<IProduct[]>>(this.baseURL + 'products', {params});
  }

  getBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(this.baseURL + 'products/brands');
  }

  getTypes(): Observable<Type[]>{
    return this.http.get<Type[]>(this.baseURL + 'products/types');
  }
}
