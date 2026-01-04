import { TestBed } from '@angular/core/testing';

import { Referee } from './referee';

describe('Referee', () => {
  let service: Referee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Referee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
