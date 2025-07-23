import { TestBed } from '@angular/core/testing';

import { GetLatLonService } from './geo-weather.service';

describe('GetLatLonService', () => {
  let service: GetLatLonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLatLonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
