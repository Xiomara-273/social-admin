import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../../core/models/equipo.model';
import { ListarEquiposUseCase } from '../../../domain/use-cases/listar-equipos.usecase';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html'
})
export class EquiposListComponent implements OnInit {

  equipos: Equipo[] = [];

  constructor(
    private listarEquipos: ListarEquiposUseCase
  ) {}

  ngOnInit(): void {
    this.listarEquipos.ejecutar().subscribe({
      next: (data: Equipo[]) => {
        this.equipos = data;
      },
      error: (err: any) => {
        console.error('Error al listar equipos', err);
      }
    });
  }
}