import { TestBed } from '@angular/core/testing';

import { UpdatescoreService } from './updatescore.service';

describe('UpdatescoreService', () => {
  let service: UpdatescoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatescoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
