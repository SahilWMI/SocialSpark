'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar'

const featuredUsers = [
  { name: 'Alex Johnson', bio: 'Photographer & Traveler', image: '/images/user1.jpg' },
  { name: 'Maya Rivera', bio: 'Digital Illustrator', image: '/images/user2.jpg' },
  { name: 'Leo Zhang', bio: 'Tech Enthusiast & Coder', image: '/images/user3.jpg' },
];

const trendingTopics = [
  { title: '🌍 Climate Action', description: 'Join discussions about saving the planet.' },
  { title: '🎨 Digital Art', description: 'Discover unique pieces and share your creations.' },
  { title: '📸 Street Photography', description: 'Capture the world in raw moments.' },
];

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-8 pb-24">
        <Navbar/>
      <h1 className="text-3xl font-bold mb-6">Discover</h1>

      {/* Featured Creators */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Featured Creators</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {featuredUsers.map((user, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-gray-100 rounded-xl shadow-sm p-4 flex flex-col items-center"
            >
              <Image
                src={user.image}
                width={80}
                height={80}
                alt={user.name}
                className="rounded-full mb-3 object-cover"
              />
              <h3 className="text-md font-semibold">{user.name}</h3>
              <p className="text-sm text-gray-600 text-center">{user.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Topics */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
        <div className="space-y-4">
          {trendingTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm"
            >
              <h3 className="text-lg font-medium">{topic.title}</h3>
              <p className="text-gray-600 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
