import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartidosService } from '../../../../infrastructure/services/partidos.service';
import { ResultadosService } from '../../../../infrastructure/services/resultados.service';
import { Partido } from '../../../../core/models/partido.model';
import { Observable } from 'rxjs';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule, AsyncPipe, FormsModule],
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.scss']
})
export class PartidosComponent implements OnInit {
  private partidosService = inject(PartidosService);
  private resultadosService = inject(ResultadosService);

  partidos$: Observable<Partido[]> = this.partidosService.partidos$;
  selectedTeam: 'home' | 'away' = 'home'; 

  // --- NUEVAS VARIABLES PARA PROGRAMAR PARTIDO ---
  mostrarFormulario = false;
  nuevoPartido = {
    home: '',
    away: '',
    court: '',
    time: '',
    referee: ''
  };

  ngOnInit(): void {}

  // --- LÓGICA DEL MODAL ---
  abrirModal() {
    this.mostrarFormulario = true;
  }

  cerrarModal() {
    this.mostrarFormulario = false;
    this.nuevoPartido = { home: '', away: '', court: '', time: '', referee: '' };
  }

  guardarPartido() {
    if (this.nuevoPartido.home && this.nuevoPartido.away) {
      this.partidosService.create(this.nuevoPartido);
      this.cerrarModal(); // Cierra y limpia
    } else {
      alert('Por favor, ingresa los nombres de los equipos.');
    }
  }

  // --- LÓGICA EXISTENTE ---
  cambiarEstado(id: number, nuevoEstado: Partido['status']): void {
    this.partidosService.updateStatus(id, nuevoEstado);
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar este partido?')) {
      this.partidosService.delete(id); 
    }
  }

  seleccionarEquipo(equipo: 'home' | 'away'): void {
    this.selectedTeam = equipo;
  }

  registrarEvento(matchId: number, tipo: 'GOL' | 'T.AMARILLA' | 'T.ROJA' | 'MVP', jugadorInput: HTMLInputElement): void {
    const jugador = jugadorInput.value.trim().toUpperCase();

    if (!jugador) {
      jugadorInput.focus();
      return;
    }

    if (tipo === 'GOL' || tipo === 'MVP') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: tipo === 'GOL' ? ['#4f46e5', '#ffffff'] : ['#fbbf24', '#ffffff']
      });
    }

    if (tipo === 'MVP') {
      this.resultadosService.setMVP(matchId, jugador);
    } else {
      this.resultadosService.addEvent(matchId, {
        player: jugador,
        team: this.selectedTeam,
        type: tipo,
        minute: '90'
      });
    }

    jugadorInput.value = ''; 
    jugadorInput.focus();
  }

  borrarEvento(matchId: number, eventId: number): void {
    this.resultadosService.deleteEvent(matchId, eventId);
  }
}