import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { RecordMockData } from '../../shared/mock-data/mock-record-data';

@Injectable()
export class SpendService {

  constructor(private httpClient: HttpClient) { }

  getRecordData(): Observable<any> {
    return of(RecordMockData);
  }

  recordSpend(spendData: any): Observable<any> {
    console.log('Submit spend data:');
    console.log(spendData);

    return of();
  }

  getMember() {
    const url = 'http://localhost:8080/api/record/member';
    return this.httpClient.get(url);
  }

}
