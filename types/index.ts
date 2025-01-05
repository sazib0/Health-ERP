export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  lastVisit?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  datetime: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: string;
}

export interface DashboardMetrics {
  totalPatients: number;
  activeAppointments: number;
  monthlyRevenue: number;
  inventoryAlerts: number;
}