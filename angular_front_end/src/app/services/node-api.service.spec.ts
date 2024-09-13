import { TestBed } from '@angular/core/testing';

import { NodeAPIService } from './node-api.service';

describe('NodeAPIService', () => {
  let service: NodeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
