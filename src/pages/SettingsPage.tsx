import React from 'react';
import { User, Bell, Shield, Globe } from 'lucide-react';

export function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm divide-y">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    defaultValue="Dr. Michael Chen"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    defaultValue="michael.chen@healtherp.com"
                  />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-gray-500">Receive email updates about your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
              <div className="space-y-4">
                <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Change Password
                </button>
                <button className="w-full py-2 px-4 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  Enable Two-Factor Authentication
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Settings</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <User className="w-5 h-5 mr-3 text-gray-400" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <Bell className="w-5 h-5 mr-3 text-gray-400" />
                <span>Notifications</span>
              </button>
              <button className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 mr-3 text-gray-400" />
                <span>Security</span>
              </button>
              <button className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-50 rounded-lg">
                <Globe className="w-5 h-5 mr-3 text-gray-400" />
                <span>Language</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}