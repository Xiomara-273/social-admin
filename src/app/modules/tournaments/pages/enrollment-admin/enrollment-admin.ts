import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../../../infrastructure/services/enrollment.service';
import { EnrollmentStatus, PaymentStatus } from '../../../../core/models/enrollment.model';
import { EnrollmentFormComponent } from "../../components/enrollment-form/enrollment-form";

@Component({
  selector: 'app-enrollment-admin',
  standalone: true,
  imports: [CommonModule, EnrollmentFormComponent],
  templateUrl: './enrollment-admin.html',
  styleUrls: ['./enrollment-admin.scss']
})
export class EnrollmentAdminComponent {

  constructor(public enrollmentService: EnrollmentService) {}

  // Función para cambiar el estado del pago (Toggle)
  togglePayment(id: string | undefined, currentPayment: PaymentStatus) {
    if (!id) return;
    const nextPayment: PaymentStatus = currentPayment === 'pagado' ? 'pendiente' : 'pagado';
    this.enrollmentService.updatePayment(id, nextPayment);
  }

  // Función para aprobar equipo
  approve(id: string | undefined) {
    if (!id) return;
    this.enrollmentService.updateStatus(id, 'aprobado');
  }

  // Función para rechazar equipo
  reject(id: string | undefined) {
    if (!id) return;
    this.enrollmentService.updateStatus(id, 'rechazado');
  }
}