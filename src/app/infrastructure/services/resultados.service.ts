import { Injectable, inject } from '@angular/core';
import { PartidosService } from './partidos.service'; //

export interface MatchEvent {
  id: number;
  player: string;
  team: 'home' | 'away';
  type: 'GOL' | 'T.AMARILLA' | 'T.ROJA';
  minute: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  private partidosService = inject(PartidosService); //

  addEvent(matchId: number, eventData: Omit<MatchEvent, 'id'>) {
    const partidos = this.partidosService.getAll();
    const match = partidos.find(p => p.id === Number(matchId));
    
    if (!match) return;

    // Lógica de Goles: Actualiza el marcador del partido directamente
    if (eventData.type === 'GOL') {
      if (eventData.team === 'home') match.scoreHome++;
      else match.scoreAway++;
    }

    match.events.unshift({
      id: Date.now(),
      ...eventData
    });

    // Notificamos al PartidosService que los datos cambiaron
    this.partidosService.refresh(); 
  }

  deleteEvent(matchId: number, eventId: number) {
    const partidos = this.partidosService.getAll();
    const match = partidos.find(p => p.id === Number(matchId));
    
    if (!match) return;

    const eventIndex = match.events.findIndex(e => e.id === Number(eventId));
    if (eventIndex !== -1) {
      const event = match.events[eventIndex];
      // Si borramos un gol, restamos del marcador
      if (event.type === 'GOL') {
        if (event.team === 'home') match.scoreHome--;
        else match.scoreAway--;
      }
      match.events.splice(eventIndex, 1);
      this.partidosService.refresh();
    }
  }

  setMVP(matchId: number, playerName: string) {
    const partidos = this.partidosService.getAll();
    const match = partidos.find(p => p.id === Number(matchId));
    if (match) {
      match.mvp = playerName;
      this.partidosService.refresh();
    }
  }
}