import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DomainNames, APIs } from '../../core/urls/service-apis';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private httpClient: HttpClient) { }

  getAllMembers(): Observable<any> {
    const url = `${DomainNames.local}${APIs.members}`;
    return this.httpClient.get(url);
  }

  createMember(member: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.members}`;
    return this.httpClient.post(url, member);
  }

  updateMember(member: any): Observable<any> {
    const url = `${DomainNames.local}${APIs.members}`;
    return this.httpClient.patch(url, member);
  }

  deleteMember(memberId: number): Observable<any> {
    const url = `${DomainNames.local}${APIs.members}/${memberId}`;
    return this.httpClient.delete(url);
  }

}
