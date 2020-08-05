import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { AccountService } from '../services/account.service';

@Injectable()
export class AccountResolver implements Resolve<any> {

  constructor(private accountService: AccountService) { }

  resolve(): Observable<any> {
    return this.accountService.getAllAccounts();
  }

}