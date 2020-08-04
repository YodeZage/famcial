import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { PurposeService } from '../services/purpose.service';

@Injectable()
export class PurposeResolver implements Resolve<any> {

  constructor(private purposeService: PurposeService) { }

  resolve(): Observable<any> {
    return this.purposeService.getAllPurposes();
  }

}
