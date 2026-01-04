export type EnrollmentStatus = 'pendiente' | 'aprobado' | 'rechazado';
export type PaymentStatus = 'pendiente' | 'pagado';

export interface Enrollment {
  id?: string;
  idTorneo: string;       // Relación con el torneo
  nombreEquipo: string;
  representante: string;
  contacto: string;
  estado: EnrollmentStatus;
  pago: PaymentStatus;
  fechaInscripcion: Date;
}