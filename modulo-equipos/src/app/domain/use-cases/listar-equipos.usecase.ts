import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EquipoRepository } from '../../core/services/equipo.repository';
import { Equipo } from '../../core/models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class ListarEquiposUseCase {

  constructor(private equipoRepo: EquipoRepository) {}

  ejecutar(): Observable<Equipo[]> {
    return this.equipoRepo.listar();
  }
}