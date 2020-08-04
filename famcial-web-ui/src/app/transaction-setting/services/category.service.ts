import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DomainNames, APIs } from '../../core/urls/service-apis';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllSpendCategory(): Observable<any> {
    const url = `${DomainNames.local}${APIs.categoryByType}/spend`;
    return this.httpClient.get(url);
  }

  getAllIncomeCategory(): Observable<any> {
    const url = `${DomainNames.local}${APIs.categoryByType}/income`;
    return this.httpClient.get(url);
  }

  createCategory(category: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.categories}`;
    return this.httpClient.post(url, category);
  }

  updateCategory(category: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.categories}`;
    return this.httpClient.patch(url, category);
  }

  deleteCategory(categoryId: number): Observable<any> {
    const url = `${DomainNames.local}${APIs.categories}/${categoryId}`;
    return this.httpClient.delete(url);
  }

  createSubCategory(subCategory: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.subCategory}`;
    return this.httpClient.post(url, subCategory);
  }

  updateSubCategory(subCategory: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.subCategory}`;
    return this.httpClient.patch(url, subCategory);
  }

  deleteSubCategory(subId: number): Observable<any> {
    const url = `${DomainNames.local}${APIs.subCategory}/${subId}`;
    return this.httpClient.delete(url);
  }

}
