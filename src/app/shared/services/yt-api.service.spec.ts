import { TestBed } from '@angular/core/testing';

import { YtApiService } from './yt-api.service';

describe('YtApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YtApiService = TestBed.get(YtApiService);
    expect(service).toBeTruthy();
  });
});
