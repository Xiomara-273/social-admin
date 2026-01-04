import { Injectable, signal } from '@angular/core';
import { Tournament } from '../../core/models/tournament.model';
import { TournamentRepository } from '../../core/interfaces/tournament.repository';

@Injectable({
  providedIn: 'root'
})
export class TournamentService extends TournamentRepository {
  
  // 1. El estado reactivo (Signal)
  private tournamentsSignal = signal<Tournament[]>([]);

  constructor() {
    super(); // Obligatorio al usar extends
  }

  // 2. Implementar todos los métodos del "Contrato" (Interfaz)
  
  // READ
  async getAll(): Promise<Tournament[]> {
    return this.tournamentsSignal();
  }

  async getById(id: string): Promise<Tournament | undefined> {
    return this.tournamentsSignal().find(t => t.id === id);
  }

  // CREATE
  async create(tournament: Tournament): Promise<void> {
    this.tournamentsSignal.update(current => [...current, { ...tournament, id: crypto.randomUUID() }]);
  }

  // UPDATE
  async updateStatus(id: string, status: string): Promise<void> {
    this.tournamentsSignal.update(list => 
      list.map(t => t.id === id ? { ...t, estado: status as any } : t)
    );
  }

  // DELETE
  async delete(id: string): Promise<void> {
    this.tournamentsSignal.update(list => list.filter(t => t.id !== id));
  }

  // Helper para que la vista vea los cambios en tiempo real
 get tournaments() {
  return this.tournamentsSignal;
}
}