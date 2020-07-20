import { TestBed } from '@angular/core/testing';

import { IncomeResolver } from './income.resolver';

describe('IncomeResolver', () => {
  let service: IncomeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
