import { TestBed, inject } from '@angular/core/testing';

import { GetnewsService } from './getnews.service';

describe('GetnewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetnewsService]
    });
  });

  it('should be created', inject([GetnewsService], (service: GetnewsService) => {
    expect(service).toBeTruthy();
  }));
});
