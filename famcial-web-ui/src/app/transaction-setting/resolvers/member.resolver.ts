import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { MemberService } from '../services/member.service';

@Injectable()
export class MemberResolver implements Resolve<any> {

  constructor(private memberService: MemberService) { }

  resolve(): Observable<any> {
    return this.memberService.getAllMembers();
  }

}
