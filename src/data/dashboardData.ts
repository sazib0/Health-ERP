import { Users, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

export const metrics = [
  { title: 'Total Patients', value: '2,847', icon: Users, trend: { value: 12, isPositive: true } },
  { title: 'Active Appointments', value: '47', icon: Calendar },
  { title: 'Monthly Revenue', value: '$128,450', icon: TrendingUp, trend: { value: 8, isPositive: true } },
  { title: 'Inventory Alerts', value: '3', icon: AlertTriangle },
];

export const todaysAppointments = [
  {
    id: '1',
    time: '09:00 AM',
    patientName: 'Sarah Johnson',
    doctorName: 'Michael Chen',
    type: 'Check-up',
  },
  {
    id: '2',
    time: '10:30 AM',
    patientName: 'Robert Smith',
    doctorName: 'Emily Wilson',
    type: 'Follow-up',
  },
  {
    id: '3',
    time: '11:45 AM',
    patientName: 'Maria Garcia',
    doctorName: 'Michael Chen',
    type: 'Consultation',
  },
];