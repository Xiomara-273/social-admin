import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Partido } from '../../core/models/partido.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private partidos: Partido[] = [];
  private partidosSubject = new BehaviorSubject<Partido[]>([]);
  
  partidos$ = this.partidosSubject.asObservable();

  constructor() {
    // Partido de prueba inicial
    this.create({
      home: 'F.C. Guerreros',
      away: 'Águilas Reales',
      court: 'Cancha Central',
      time: '20:00',
      type: 'torneo',
      referee: 'Por asignar'
    });
  }

  // Notifica a todos los componentes que los datos cambiaron
  refresh() {
    this.partidosSubject.next([...this.partidos]);
  }

  getAll() {
    return this.partidos;
  }

 create(data: any) {
    const newMatch: Partido = {
      id: Date.now(),
      home: data.home || 'Equipo Local',
      away: data.away || 'Equipo Visitante',
      court: data.court || 'Cancha por definir',
      time: data.time || '--:--',
      referee: data.referee || 'Sin asignar',
      
      // --- CAMPOS FALTANTES QUE CAUSAN EL ERROR ---
      date: data.date || new Date().toISOString().split('T')[0], // Fecha actual por defecto
      type: data.type || 'torneo', // O el tipo que use tu modelo
      
      scoreHome: 0,
      scoreAway: 0,
      status: 'programado',
      events: [],
      mvp: ''
    };
    
    this.partidos.push(newMatch);
    this.refresh();
    return newMatch;
  }

  updateStatus(id: number, status: Partido['status']) {
    const match = this.partidos.find(p => p.id === Number(id));
    if (match) {
      match.status = status;
      this.refresh();
    }
  }

  delete(id: number) {
    this.partidos = this.partidos.filter(p => p.id !== Number(id));
    this.refresh();
  }

  update(id: number, data: any) {
    const index = this.partidos.findIndex(p => p.id === Number(id));
    if (index !== -1) {
      this.partidos[index] = { ...this.partidos[index], ...data };
      this.refresh();
    }
  }
}