import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DomainNames, APIs } from '../../core/urls/service-apis';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.auth}`;
    return this.httpClient.post(url, user);
  }

}
