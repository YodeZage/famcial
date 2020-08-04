import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { StoreService } from '../services/store.service';

@Injectable()
export class StoreResolver implements Resolve<any> {

  constructor(private storeService: StoreService) { }

  resolve(): Observable<any> {
    return this.storeService.getAllStores();
  }

}
