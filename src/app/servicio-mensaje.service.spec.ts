import { TestBed } from '@angular/core/testing';

import { ServicioMensajeService } from './servicio-mensaje.service';

describe('ServicioMensajeService', () => {
  let service: ServicioMensajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMensajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
