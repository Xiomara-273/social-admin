import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentTableComponent } from '../../components/tournament-table/tournament-table';
import { TournamentCalendar } from '../../components/tournament-calendar/tournament-calendar';
import { RouterLink } from '@angular/router';

// Definimos un tipo para las pestañas para que el código sea más limpio
type DashboardTabs = 'resumen' | 'tabla' | 'calendario' | 'equipos' | 'estadisticas' | 'notificaciones';

@Component({
  selector: 'app-tournament-dashboard',
  standalone: true,
  imports: [CommonModule, TournamentCalendar, TournamentTableComponent, RouterLink],
  templateUrl: './tournament-dashboard.html',
  styleUrls: ['./tournament-dashboard.scss']
})
export class TournamentDashboardComponent {

  // 1. Actualizamos el signal con las nuevas opciones del dashboard administrativo
  // Ponemos 'resumen' como pestaña por defecto para ver las métricas iniciales
  activeTab = signal<DashboardTabs>('resumen');

  // 2. Ajustamos el método para aceptar los nuevos tipos de pestañas
  setTab(tab: DashboardTabs) {
    this.activeTab.set(tab);
  }

  // Aquí podrías más adelante inyectar servicios para traer los datos reales de:
  // - Usuarios activos (150)
  // - Equipos registrados (24)
  // - Reportes recientes
}