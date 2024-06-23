import { TestBed } from '@angular/core/testing';

import { CommomserviceService } from './commomservice.service';

describe('CommomserviceService', () => {
  let service: CommomserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommomserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
