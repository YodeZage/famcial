import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SpendService } from '../../keeping-account/services';

@Injectable()
export class SpendResolver implements Resolve<any> {

  constructor(private spendService: SpendService) { }

  resolve(): Observable<any> {

    return this.spendService.getRecordData();

  }

}
