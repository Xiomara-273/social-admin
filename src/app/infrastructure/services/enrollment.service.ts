import { Injectable, signal, computed } from '@angular/core';
import { Enrollment, EnrollmentStatus, PaymentStatus } from '../../core/models/enrollment.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrollmentsSignal = signal<Enrollment[]>([]);

  // READ: Lista completa
  get enrollments() {
    return this.enrollmentsSignal;
  }

  // CREATE: Registrar equipo
  createEnrollment(enrollment: Enrollment) {
    const newEnrollment = { ...enrollment, id: crypto.randomUUID(), fechaInscripcion: new Date() };
    this.enrollmentsSignal.update(list => [...list, newEnrollment]);
  }

  // UPDATE: Aprobar/Rechazar o Marcar Pago
  updateStatus(id: string, status: EnrollmentStatus) {
    this.enrollmentsSignal.update(list => 
      list.map(e => e.id === id ? { ...e, estado: status } : e)
    );
  }

  updatePayment(id: string, payment: PaymentStatus) {
    this.enrollmentsSignal.update(list => 
      list.map(e => e.id === id ? { ...e, pago: payment } : e)
    );
  }

  // DELETE: Retirar equipo
  remove(id: string) {
    this.enrollmentsSignal.update(list => list.filter(e => e.id !== id));
  }
}