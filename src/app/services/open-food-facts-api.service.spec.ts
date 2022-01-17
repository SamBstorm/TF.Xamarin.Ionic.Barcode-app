import { TestBed } from '@angular/core/testing';

import { OpenFoodFactsAPIService } from './open-food-facts-api.service';

describe('OpenFoodFactsAPIService', () => {
  let service: OpenFoodFactsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenFoodFactsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
