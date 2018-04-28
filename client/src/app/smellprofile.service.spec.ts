import { TestBed, inject } from '@angular/core/testing';

import { SmellprofileService } from './smellprofile.service';

describe('SmellprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmellprofileService]
    });
  });

  it('should be created', inject([SmellprofileService], (service: SmellprofileService) => {
    expect(service).toBeTruthy();
  }));
});
