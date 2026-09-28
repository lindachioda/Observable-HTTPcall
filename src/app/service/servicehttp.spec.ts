import { TestBed } from '@angular/core/testing';

import { Servicehttp } from './servicehttp';

describe('Servicehttp', () => {
  let service: Servicehttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicehttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
