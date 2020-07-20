import { TestBed } from '@angular/core/testing';

import { SpendResolver } from './spend.resolver';

describe('SpendResolver', () => {
  let service: SpendResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
