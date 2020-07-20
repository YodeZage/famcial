import { TestBed } from '@angular/core/testing';

import { LoanResolver } from './loan.resolver';

describe('LoanResolver', () => {
  let service: LoanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
