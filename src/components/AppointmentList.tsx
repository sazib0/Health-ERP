import React from 'react';
import { Clock } from 'lucide-react';

interface AppointmentListProps {
  appointments: Array<{
    id: string;
    time: string;
    patientName: string;
    doctorName: string;
    type: string;
  }>;
}

export function AppointmentList({ appointments }: AppointmentListProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Today's Appointments</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <p className="font-medium">{appointment.patientName}</p>
                <p className="text-sm text-gray-500">
                  {appointment.time} • Dr. {appointment.doctorName}
                </p>
                <span className="inline-block mt-1 text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded">
                  {appointment.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}