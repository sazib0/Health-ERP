import React from 'react';
import { BarChart2, TrendingUp, Users, Calendar } from 'lucide-react';

const metrics = [
  { title: 'Total Patients', value: '2,847', trend: '+12%' },
  { title: 'Monthly Revenue', value: '$128,450', trend: '+8%' },
  { title: 'Appointments', value: '456', trend: '+5%' },
  { title: 'Patient Satisfaction', value: '4.8/5', trend: '+2%' },
];

export function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <select className="px-4 py-2 border rounded-lg">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <div key={metric.title} className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-sm text-gray-500">{metric.title}</p>
            <p className="text-2xl font-semibold mt-2">{metric.value}</p>
            <p className="text-sm text-green-600 mt-2">{metric.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center border rounded">
            <p className="text-gray-500">Revenue Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Patient Demographics</h2>
          <div className="h-64 flex items-center justify-center border rounded">
            <p className="text-gray-500">Demographics Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}