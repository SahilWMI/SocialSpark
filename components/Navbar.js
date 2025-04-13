import React from 'react';
import Link from 'next/link';
import { Home, MessageSquare, User } from 'lucide-react';

export default function Bottom() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <nav className="h-16">
        <ul className="flex justify-around items-center h-full m-0 p-0 list-none">
          <li>
            <Link href="/home" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 cursor-pointer px-4 py-2">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </Link>
          </li>
          
          <li>
            <Link href="/chat" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 cursor-pointer px-4 py-2">
              <MessageSquare size={24} />
              <span className="text-xs mt-1">Chat</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-500 cursor-pointer px-4 py-2">
              <User size={24} />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}