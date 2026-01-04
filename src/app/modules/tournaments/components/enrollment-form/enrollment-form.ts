import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnrollmentService } from '../../../../infrastructure/services/enrollment.service';
import { Enrollment } from '../../../../core/models/enrollment.model';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrls: ['./enrollment-form.scss']
})
export class EnrollmentFormComponent {
  @Input() tournamentId: string = ''; // Recibe el ID del torneo al que se inscribe

  enrollmentData: Enrollment = this.initForm();

  constructor(private enrollmentService: EnrollmentService) {}

  sendEnrollment() {
    this.enrollmentData.idTorneo = this.tournamentId;
    this.enrollmentService.createEnrollment(this.enrollmentData);
    alert('¡Inscripción enviada con éxito!');
    this.enrollmentData = this.initForm(); // Limpiar
  }

  private initForm(): Enrollment {
    return {
      idTorneo: '',
      nombreEquipo: '',
      representante: '',
      contacto: '',
      estado: 'pendiente',
      pago: 'pendiente',
      fechaInscripcion: new Date()
    };
  }
}