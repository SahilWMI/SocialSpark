'use client';

import { Users } from 'lucide-react';
import Navbar from '@/components/Navbar'

const communities = [
  {
    name: 'Bonsai Masters',
    members: 856,
    description: 'Learn and share the ancient art of bonsai cultivation with fellow enthusiasts.',
    image: '/images/bonsai.jpg',
  },
  {
    name: 'Keyboard Warriors',
    members: 2341,
    description: 'Everything about mechanical keyboards, from builds to keycap collections.',
    image: '/images/keyboards.jpg',
  },
];

export default function CommunitiesPage() {
  return (
      <div className="min-h-screen bg-white px-4 pb-20">
        <Navbar/>
      <h1 className="text-3xl font-bold my-6">Communities</h1>

      <div className="space-y-6">
        {communities.map((com, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden shadow-md border">
            <img
              src={com.image}
              alt={com.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{com.name}</h2>
              <div className="flex items-center text-sm text-gray-500 mt-1 mb-2">
                <Users className="w-4 h-4 mr-1" />
                {com.members} members
              </div>
              <p className="text-gray-700">{com.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
