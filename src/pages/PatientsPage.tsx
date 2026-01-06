import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const patients = [
  { id: '1', name: 'Sarah Johnson', age: 34, lastVisit: '2024-02-15', status: 'Active' },
  { id: '2', name: 'Michael Brown', age: 45, lastVisit: '2024-02-10', status: 'Active' },
  { id: '3', name: 'Emma Wilson', age: 28, lastVisit: '2024-01-20', status: 'Inactive' },
];

export function PatientsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Patients</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Patient
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="pl-10 pr-4 py-2 w-full border rounded-lg"
          />
        </div>
        <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Age</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Last Visit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{patient.name}</td>
                <td className="px-6 py-4">{patient.age}</td>
                <td className="px-6 py-4">{patient.lastVisit}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    patient.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}