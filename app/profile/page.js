'use client';


import Image from 'next/image';
import Navbar from '@/components/Navbar'
import LogoutButton from '@/components/LogoutButton';
import { useAuth } from '@/context/AuthContext';

export default function ProfilePage() {
 const { user, loading } = useAuth();

if (loading) {
  return (
    <div className="flex justify-center items-center h-screen">
      <p>Loading profile...</p>
    </div>
  );
}
if (!user) {
  return (
    <div className="flex justify-center items-center h-screen">
      <p>User not found.</p>
    </div>
  );
}
  return (
      <div className="min-h-screen bg-white">
      <Navbar/>
        <div className='p-4'>
            <h1 className='font-bold text-black text-3xl'>Profile</h1>
            <div>
            </div>
        </div>

      {/* Profile section */}
      <div className="max-w-4xl mx-auto p-4 ">
      
          <div className="flex items-center space-x-6">
            <Image
              src={user.profilePic}
              alt="Profile"
              width={100}
              height={100}
              className="rounded-full border-4 border-white"
            />
            <div>
              <h2 className="text-2xl text-black font-bold">{user.name}</h2>
              <p className="text-gray-500">{user.username}</p>
              <p className="mt-2 text-sm text-gray-700">{user.bio}</p>
            </div>
          </div>
        
      </div>
          <div className="p-4 border-t border-b border-zinc-200">
            <h1 className='text-black font-bold text-xl '>My hobbies</h1>
             <div className='flex gap-3 m-2 p-2'>
                <span className='text-purple-500 font-semibold text-sm rounded-2xl bg-purple-200 px-3 py-1'>Lorem ipsum.</span>
                <span className='text-purple-500 font-semibold text-sm rounded-2xl bg-purple-200 px-3 py-1'>Lorem ipsum.</span>
                <span className='text-purple-500 font-semibold text-sm rounded-2xl bg-purple-200 px-3 py-1'>Lorem ipsum.</span>
                <span className='text-purple-500 font-semibold text-sm rounded-2xl bg-purple-200 px-3 py-1'>Lorem ipsum.</span>
             </div>
          </div>
        <LogoutButton/>
    </div>
  );
}
