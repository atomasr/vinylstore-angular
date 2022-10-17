import { TestBed } from '@angular/core/testing';

import { VinylCartService } from './vinyl-cart.service';

describe('VinylCartService', () => {
  let service: VinylCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinylCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
