import React from 'react';

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="space-y-3">
        <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          New Appointment
        </button>
        <button className="w-full py-2 px-4 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          Add Patient
        </button>
        <button className="w-full py-2 px-4 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
          Generate Invoice
        </button>
      </div>
    </div>
  );
}