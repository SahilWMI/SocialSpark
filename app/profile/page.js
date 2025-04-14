'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar'
import LogoutButton from '@/components/LogoutButton';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    bio: 'Web developer. Coffee lover. Always learning.',
    profilePic: '/default-profile.png', // replace with dynamic user photo if using Firebase Auth
    coverPic: '/cover.jpg', // optional cover image
    followers: 124,
    following: 78,
    posts: 32,
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar/>
      {/* Cover photo */}
      <div className="w-full h-48 bg-purple-600 relative">
        <Image
          src={user.coverPic}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      {/* Profile section */}
      <div className="max-w-4xl mx-auto p-4 -mt-16 z-10 relative">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-6">
            <Image
              src={user.profilePic}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.username}</p>
              <p className="mt-2 text-sm text-gray-700">{user.bio}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex mt-6 space-x-8 text-sm text-gray-700">
            <div>
              <span className="font-semibold">{user.followers}</span> Followers
            </div>
            <div>
              <span className="font-semibold">{user.following}</span> Following
            </div>
            <div>
              <span className="font-semibold">{user.posts}</span> Posts
            </div>
          </div>
        </div>
        <LogoutButton/>
      </div>
    </div>
  );
}
