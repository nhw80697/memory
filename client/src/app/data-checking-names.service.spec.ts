import { TestBed } from '@angular/core/testing';

import { DataCheckingNamesService } from './data-checking-names.service';

describe('DataCheckingNamesService', () => {
  let service: DataCheckingNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCheckingNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
