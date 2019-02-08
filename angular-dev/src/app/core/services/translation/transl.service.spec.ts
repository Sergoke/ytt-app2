import { TestBed } from '@angular/core/testing';

import { TranslService } from './transl.service';

describe('TranslService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslService = TestBed.get(TranslService);
    expect(service).toBeTruthy();
  });
});
