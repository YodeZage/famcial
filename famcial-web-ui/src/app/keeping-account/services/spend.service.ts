import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RecordMockData } from '../../shared/mock-data/mock-record-data';

@Injectable()
export class SpendService {

  constructor() { }

  getRecordData(): Observable<any> {
    return of(RecordMockData);
  }

  recordSpend(spendData: any): Observable<any> {
    console.log('Submit spend data:');
    console.log(spendData);

    return of();
  }

}
