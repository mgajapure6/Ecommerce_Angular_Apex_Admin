import { TestBed, inject } from '@angular/core/testing';

import { RestWebServiceUrlService } from './rest-web-service-url.service';

describe('RestWebServiceUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestWebServiceUrlService]
    });
  });

  it('should be created', inject([RestWebServiceUrlService], (service: RestWebServiceUrlService) => {
    expect(service).toBeTruthy();
  }));
});
