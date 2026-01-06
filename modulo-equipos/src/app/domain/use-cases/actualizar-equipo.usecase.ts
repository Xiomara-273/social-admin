import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../../core/models/equipo.model';
import { EquipoRepository } from '../../core/services/equipo.repository';

@Injectable({
  providedIn: 'root'
})
export class ActualizarEquipoUseCase {

  constructor(private equipoRepository: EquipoRepository) {}

  execute(id: number, equipo: Equipo): Observable<Equipo> {
    return this.equipoRepository.actualizar(id, equipo);
  }
}