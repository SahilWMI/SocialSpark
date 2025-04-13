'use client';

import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';


export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  // ✅ Ensures rendering happens only on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Redirect to login if not authenticated
  useEffect(() => {
    if (isClient && !loading && !user) {
      router.push('/');
    }
  }, [user, loading, isClient]);

  // ✅ Don’t render anything server-side
  if (!isClient || loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl text-purple-600 font-bold">Welcome, {user?.displayName || 'User'}!</h1>
      {user?.photoURL && (
        <img
          src={user.photoURL}
          alt="Profile Picture"
          className="w-24 h-24 rounded-full mt-4"
        />
      )}
      <p className="text-gray-600 mt-2">{user?.email}</p>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <LogoutButton />
      </div>
    </div>
  );
}