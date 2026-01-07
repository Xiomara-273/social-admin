
export interface Partido {
  id: number;
  home: string;
  away: string;
  court: string;
  referee: string;
  date: string;
  time: string;
  type: 'amistoso' | 'reto' | 'torneo';
  scoreHome: number;
  scoreAway: number;
  status: 'programado' | 'en juego' | 'finalizado' | 'cancelado' | 'correccion';
  events: any[];
  mvp?: string;
}