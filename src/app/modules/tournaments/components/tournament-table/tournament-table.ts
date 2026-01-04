import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../../../infrastructure/services/enrollment.service';

@Component({
  selector: 'app-tournament-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament-table.html',
  styleUrls: ['./tournament-table.scss']
})
export class TournamentTableComponent {
  // Usamos un 'computed' de Signal para que la tabla se actualice sola 
  // cuando cambien las inscripciones en el servicio.
  approvedTeams = computed(() => 
    this.enrollmentService.enrollments().filter(e => e.estado === 'aprobado')
  );

  constructor(private enrollmentService: EnrollmentService) {}
}