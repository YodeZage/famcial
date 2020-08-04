import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DomainNames, APIs } from '../../core/urls/service-apis';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient: HttpClient) { }

  getAllStores(): Observable<any> {
    const url = `${DomainNames.local}${APIs.stores}`;
    return this.httpClient.get(url);
  }

  createStore(store: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.stores}`;
    return this.httpClient.post(url, store);
  }

  updateStore(store: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.stores}`;
    return this.httpClient.patch(url, store);
  }

  deleteStore(storeId: number): Observable<any> {
    const url = `${DomainNames.local}${APIs.stores}/${storeId}`;
    return this.httpClient.delete(url);
  }

}
