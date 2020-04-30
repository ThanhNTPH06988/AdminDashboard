import { TestBed } from '@angular/core/testing';

import { BonusLessonsService } from './bonus-lessons.service';

describe('BonusLessonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonusLessonsService = TestBed.get(BonusLessonsService);
    expect(service).toBeTruthy();
  });
});
