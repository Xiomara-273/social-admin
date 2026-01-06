import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo.model';

export abstract class EquipoRepository {
  abstract crear(equipo: Equipo): Observable<Equipo>;
  abstract listar(): Observable<Equipo[]>;
  abstract actualizar(id: number, equipo: Equipo): Observable<Equipo>;
  abstract eliminar(id: number): Observable<void>;
}