import { TestBed } from '@angular/core/testing';

import { MyCitiesService } from './my-cities.service';

describe('MyCitiesService', () => {
  let service: MyCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
