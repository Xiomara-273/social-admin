import { Component, Input } from '@angular/core';
import { Equipo } from '../../../core/models/equipo.model';

@Component({
  selector: 'app-equipo-card',
  templateUrl: './equipo-card.component.html',
  styleUrls: ['./equipo-card.component.css']
})
export class EquipoCardComponent {

  @Input() equipo!: Equipo;

}