import { Tournament } from '../models/tournament.model';

export abstract class TournamentRepository {
  // CREATE
  abstract create(tournament: Tournament): Promise<void>;
  
  // READ
  abstract getAll(): Promise<Tournament[]>;
  abstract getById(id: string): Promise<Tournament | undefined>;
  
  // UPDATE
  abstract updateStatus(id: string, status: string): Promise<void>;
  
  // DELETE
  abstract delete(id: string): Promise<void>;
}