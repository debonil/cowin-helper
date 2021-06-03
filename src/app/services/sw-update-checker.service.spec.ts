import { TestBed } from '@angular/core/testing';

import { SwUpdateCheckerService } from './sw-update-checker.service';

describe('SwUpdateCheckerService', () => {
  let service: SwUpdateCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwUpdateCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
