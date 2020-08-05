import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { DomainNames, APIs } from '../../core/urls/service-apis';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  getAllAccounts(): Observable<any> {
    const url = `${DomainNames.local}${APIs.accounts}`;
    return this.httpClient.get(url);
  }

  createAccount(account: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.accounts}`;
    return this.httpClient.post(url, account);
  }

  updateAccount(account: any, id: number): Observable<any> {
    const url = `${DomainNames.local}${APIs.accounts}/${id}`;
    return this.httpClient.put(url, account);
  }

  // deleteMember(memberId: number): Observable<any> {
  //   const url = `${DomainNames.local}${APIs.members}/${memberId}`;
  //   return this.httpClient.delete(url);
  // }

}
