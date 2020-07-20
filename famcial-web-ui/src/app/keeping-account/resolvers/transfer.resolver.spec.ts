import { TestBed } from '@angular/core/testing';

import { TransferResolver } from './transfer.resolver';

describe('TransferResolver', () => {
  let service: TransferResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransferResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
