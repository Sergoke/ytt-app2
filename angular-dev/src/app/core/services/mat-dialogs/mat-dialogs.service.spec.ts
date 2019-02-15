import { TestBed } from '@angular/core/testing';

import { MatDialogsService } from './mat-dialogs.service';

describe('MatDialogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatDialogsService = TestBed.get(MatDialogsService);
    expect(service).toBeTruthy();
  });
});
