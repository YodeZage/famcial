import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DomainNames, APIs } from '../../core/urls/service-apis';

@Injectable({
  providedIn: 'root'
})
export class PurposeService {

  constructor(private httpClient: HttpClient) { }

  getAllPurposes(): Observable<any> {
    const url = `${DomainNames.local}${APIs.purposes}`;
    return this.httpClient.get(url);
  }

  createPurpose(purpose: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.purposes}`;
    return this.httpClient.post(url, purpose);
  }

  updatePurpose(purpose: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.purposes}`;
    return this.httpClient.patch(url, purpose);
  }

  deletePurpose(purposeId: number): Observable<any> {
    const url = `${DomainNames.local}${APIs.purposes}/${purposeId}`;
    return this.httpClient.delete(url);
  }

}
