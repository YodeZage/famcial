import { TestBed } from '@angular/core/testing';

import { PurposeResolver } from './purpose.resolver';

describe('PurposeResolver', () => {
  let service: PurposeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurposeResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
