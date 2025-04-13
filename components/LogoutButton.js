'use client';
import { getAuth, signOut } from 'firebase/auth';
import app from '../lib/firebase'; // adjust path if needed
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const auth = getAuth(app);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/'); // redirect to login or home page
    } catch (error) {
      console.error('Logout failed:', error.message);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
}
