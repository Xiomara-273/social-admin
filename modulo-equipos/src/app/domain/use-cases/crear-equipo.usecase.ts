import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Equipo } from '../../core/models/equipo.model';
import { EquipoRepository } from '../../core/services/equipo.repository';

@Injectable({
  providedIn: 'root'
})
export class CrearEquipoUseCase {

  constructor(private equipoRepository: EquipoRepository) {}

  execute(equipo: Equipo): Observable<Equipo> {
    return this.equipoRepository.crear(equipo);
  }
}