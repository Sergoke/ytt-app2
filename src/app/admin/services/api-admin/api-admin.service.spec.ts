import { TestBed } from '@angular/core/testing';

import { ApiAdminService } from './api-admin.service';

describe('ApiAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiAdminService = TestBed.get(ApiAdminService);
    expect(service).toBeTruthy();
  });
});
