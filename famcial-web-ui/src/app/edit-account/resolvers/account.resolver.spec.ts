import { TestBed } from '@angular/core/testing';

import { AccountResolver } from './account.resolver';

describe('AccountResolver', () => {
  let service: AccountResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
