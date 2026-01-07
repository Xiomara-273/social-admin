import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-team-management',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agrégalos aquí
  templateUrl: './team-management.html',
  styleUrls: ['./team-management.scss']
})
export class TeamManagementComponent {
  showForm: boolean = false;

  // Lista inicial de equipos
  teams = [
    { id: '1', name: 'F.C. Guerreros',
      location: 'Quito, Pichincha',
       status: 'verified', 
      logo: 'https://cdn-icons-png.flaticon.com/512/1165/1165187.png' }
  ];

  // Objeto que se conecta al formulario
  newTeam = {
  name: '',
  location: '', // Esto se llenará con lo que elijas en el select
  owner: '',
  description: '',
  logo: ''
};

  saveTeam() {
  console.log('Datos actuales:', this.newTeam); // Esto te ayudará a ver en la consola si Angular recibe el nombre
    if (this.newTeam.name.trim() !== '') {
      // Agregar a la lista real
      this.teams.push({
        id: Date.now().toString(),
        name: this.newTeam.name,
        location: this.newTeam.location,
        status: 'verified',
        logo: this.newTeam.logo
      });

      // Limpiar y cerrar
      this.newTeam = { name: '', location: '', owner: '', description: '', logo: 'assets/default-team.png' };
      this.showForm = false;
    } else {
      alert('Por favor, ingresa al menos el nombre del equipo');
    }
  }

  deleteTeam(id: string) {
    if(confirm('¿Seguro que quieres eliminar este equipo?')) {
      this.teams = this.teams.filter(t => t.id !== id);
    }
  }

  editTeam(id: string) {
    console.log('Editando:', id);
    this.showForm = true;
  }
}