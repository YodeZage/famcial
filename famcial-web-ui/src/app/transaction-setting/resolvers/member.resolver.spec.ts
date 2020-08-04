import { TestBed } from '@angular/core/testing';

import { MemberResolver } from './member.resolver';

describe('MemberResolver', () => {
  let service: MemberResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
