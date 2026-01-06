import React from 'react';
import { Calendar as CalendarIcon, Clock, Plus } from 'lucide-react';

const appointments = [
  {
    id: '1',
    time: '09:00 AM',
    patient: 'Sarah Johnson',
    doctor: 'Dr. Michael Chen',
    type: 'Check-up',
    status: 'Scheduled',
  },
  {
    id: '2',
    time: '10:30 AM',
    patient: 'Robert Smith',
    doctor: 'Dr. Emily Wilson',
    type: 'Follow-up',
    status: 'In Progress',
  },
];

export function AppointmentsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Today's Schedule</h2>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4 mr-2" />
                March 14, 2024
              </div>
            </div>
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div key={apt.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50">
                  <Clock className="w-5 h-5 text-gray-400 mr-4" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{apt.patient}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        apt.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{apt.time} • {apt.doctor}</p>
                    <p className="text-sm text-gray-500">{apt.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Today's Appointments</p>
              <p className="text-2xl font-semibold">8</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-semibold">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}