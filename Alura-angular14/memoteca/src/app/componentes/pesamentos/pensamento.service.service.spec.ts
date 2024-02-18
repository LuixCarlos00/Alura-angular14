import { TestBed } from '@angular/core/testing';

import { Pensamento.ServiceService } from './pensamento.service.service';

describe('Pensamento.ServiceService', () => {
  let service: Pensamento.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pensamento.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
