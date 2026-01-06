import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EquipoRepository } from '../../core/services/equipo.repository';

@Injectable({
  providedIn: 'root'
})
export class EliminarEquipoUseCase {

  constructor(private equipoRepository: EquipoRepository) {}

  execute(id: number): Observable<void> {
    return this.equipoRepository.eliminar(id);
  }
}
