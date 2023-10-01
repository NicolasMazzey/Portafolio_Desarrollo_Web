import { TestBed } from '@angular/core/testing';

import { DataJuegosService } from './data-juegos.service';

describe('DataJuegosService', () => {
  let service: DataJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
