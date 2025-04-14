'use client';

import { useAuth } from '@/context/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';


export default function ChatPage() {
  const { user, loading } = useAuth();
  const [selectedUser, setSelectedUser] = useState('John Doe');
  const [messages, setMessages] = useState([
    { from: 'me', text: 'Hey there!' },
    { from: 'John Doe', text: 'Hi! How are you?' }
  ]);
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  // Ensures rendering happens only on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (isClient && !loading && !user) {
      router.push('/');
    }
  }, [user, loading, isClient]);

  // Don’t render anything server-side
  if (!isClient || loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex   bg-gray-300">
      <Navbar />
        {/* Chat List */}
        <div className="w-[30%] bg-gray-400 p-4 border-r overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Chats</h2>
          <ul>
            {['John Doe', 'Jane Smith'].map((user) => (
              <li
                key={user}
                className={`p-2 cursor-pointer rounded hover:bg-gray-400 ${selectedUser === user ? 'bg-purple-500' : ''
                  }`}
                onClick={() => setSelectedUser(user)}
              >
                {user}
              </li>
            ))}
          </ul>
      </div>
        {/* Chat Window */}
        <div className="w-[70%] flex flex-col flex-1 bg-white max-h-[91vh]">
          <div className="border-b p-4">
            <h2 className="text-lg font-bold">{selectedUser}</h2>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-xs px-4 py-2 rounded-lg ${msg.from === 'me'
                    ? 'ml-auto bg-purple-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                  }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="border-t p-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 border rounded px-4 py-2 outline-none text-gray-700"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded">
              Send
            </button>
          </div>
        </div>
    </div>
  );
}