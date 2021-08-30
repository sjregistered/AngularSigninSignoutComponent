import { TestBed } from '@angular/core/testing';

import { GetSService } from './get-s.service';

describe('GetSService', () => {
  let service: GetSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
