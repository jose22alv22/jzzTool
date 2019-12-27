import { TestBed } from '@angular/core/testing';

import { PropsTraductionsService } from './props-traductions.service';

describe('PropsTraductionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropsTraductionsService = TestBed.get(PropsTraductionsService);
    expect(service).toBeTruthy();
  });
});
