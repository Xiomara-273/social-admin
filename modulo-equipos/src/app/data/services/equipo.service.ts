import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EquipoRepository } from '../../core/services/equipo.repository';
import { Equipo } from '../../core/models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService implements EquipoRepository {

  private apiUrl = 'http://localhost:3000/equipos';

  constructor(private http: HttpClient) {}

  crear(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(this.apiUrl, equipo);
  }

  listar(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }

  actualizar(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/${id}`, equipo);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}