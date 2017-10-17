import { TestBed, inject } from '@angular/core/testing';

import { RequestsService } from './requests.service';

describe('AdserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestsService]
    });
  });

  it('should ...', inject([RequestsService], (service: RequestsService) => {
    expect(service).toBeTruthy();
  }));
});
