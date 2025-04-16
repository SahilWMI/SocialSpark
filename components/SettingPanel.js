
'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react'; 
import LogoutButton from '@/components/LogoutButton';

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Settings className="w-6 h-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-200">
          <h2 className="text-lg font-semibold">Settings</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-600 cursor-pointer">
            ✕
          </button>
        </div>

        <div className="p-4">
        <LogoutButton/>
        </div>
      </div>
    </>
  );
}
