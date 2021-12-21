import { TestBed } from '@angular/core/testing';

import { JeuDeDesService } from './jeu-de-des.service';

describe('JeuDeDesService', () => {
  let service: JeuDeDesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JeuDeDesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
