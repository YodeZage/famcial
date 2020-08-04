import { TestBed } from '@angular/core/testing';

import { StoreResolver } from './store.resolver';

describe('StoreResolver', () => {
  let service: StoreResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
