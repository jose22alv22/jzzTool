import { TestBed } from '@angular/core/testing';

import { PropsAdminService } from './props-admin.service';

describe('PropsAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropsAdminService = TestBed.get(PropsAdminService);
    expect(service).toBeTruthy();
  });
});
