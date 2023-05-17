import { TestBed } from '@angular/core/testing';

import { AbdoGuard } from './abdo.guard';

describe('AbdoGuard', () => {
  let guard: AbdoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbdoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
