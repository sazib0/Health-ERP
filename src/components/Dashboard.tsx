import React from 'react';
import { Users, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { AppointmentList } from './AppointmentList';
import { QuickActions } from './QuickActions';
import { metrics, todaysAppointments } from '../data/dashboardData';

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Dr. Chen</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AppointmentList appointments={todaysAppointments} />
        <QuickActions />
      </div>
    </div>
  );
}