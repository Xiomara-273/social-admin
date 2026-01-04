export type TournamentType = 'liga' | 'eliminacion' | 'grupos';
export type TournamentStatus = 'inscripciones' | 'en_curso' | 'finalizado';

export interface Tournament {
  id?: string;
  nombre: string;
  tipo: TournamentType;
  estado: TournamentStatus;
  
  
  fechaInicio: string;
  fechaFin: string;
  
  premios: string;
  reglas: string;
  
 
  cupos: number;
  costoInscripcion: number;

  // Estadísticas básicas (Para el Read/Dashboard)
  estadisticas?: {
    equiposInscritos: number;
    partidosJugados: number;
  };
}