import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.scss']
})
export class ConfiguracionComponent {
  tabActiva = signal<'general' | 'catalogos' | 'legales'>('general');

  // Datos de Marca
  nombreApp = signal('Social Soccer App');
  colorPrimario = signal('#00d2ff');

  // Listas Dinámicas (Catálogos)
  posiciones = signal(['Delantero', 'Medio', 'Defensa', 'Portero']);
  niveles = signal(['Amateur', 'Semi-Pro', 'Profesional']);
  
  // Textos Legales
  terminos = signal('Términos y condiciones del sistema...');
  privacidad = signal('Política de privacidad...');

  cambiarTab(tab: 'general' | 'catalogos' | 'legales') {
    this.tabActiva.set(tab);
  }

  // Funciones de Gestión
  eliminarPosicion(index: number) {
    this.posiciones.update(pos => pos.filter((_, i) => i !== index));
  }

  agregarPosicion() {
    const nueva = prompt('Nombre de la nueva posición:');
    if (nueva) this.posiciones.update(pos => [...pos, nueva]);
  }

  guardarConfig() {
    console.log('Datos guardados:', { nombre: this.nombreApp(), color: this.colorPrimario() });
    alert('✅ Configuración guardada correctamente en el sistema.');
  }
}