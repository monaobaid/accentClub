import { TestBed } from '@angular/core/testing';

import { ServAuthService } from './serv-auth.service';

describe('ServAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServAuthService = TestBed.get(ServAuthService);
    expect(service).toBeTruthy();
  });
});
