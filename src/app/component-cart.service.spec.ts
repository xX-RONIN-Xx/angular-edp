import { TestBed } from '@angular/core/testing';

import { ComponentCartService } from './component-cart.service';

describe('ComponentCartService', () => {
  let service: ComponentCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
