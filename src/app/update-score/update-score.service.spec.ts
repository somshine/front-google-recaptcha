import { TestBed } from '@angular/core/testing';

import { UpdateScoreService } from './update-score.service';

describe('UpdateScoreService', () => {
  let service: UpdateScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
