'use client'
import React from 'react';
import { MessageSquare, Compass, Users, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <nav className="h-16">
        <ul className="flex justify-around items-center h-full m-0 p-0 list-none">
          <li>
            <Link
              href="/chats"
              className="flex flex-col items-center justify-center no-underline"
            >
              <MessageSquare 
                size={24} 
                className={pathname === '/chats' ? 'text-blue-500' : 'text-gray-500'}
              />
              <span 
                className={`text-xs mt-1 ${pathname === '/chats' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                Chats
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/discover"
              className="flex flex-col items-center justify-center no-underline"
            >
              <Compass 
                size={24} 
                className={pathname === '/discover' ? 'text-blue-500' : 'text-gray-500'} 
              />
              <span 
                className={`text-xs mt-1 ${pathname === '/discover' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                Discover
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/communities"
              className="flex flex-col items-center justify-center no-underline"
            >
              <Users 
                size={24} 
                className={pathname === '/communities' ? 'text-blue-500' : 'text-gray-500'}
              />
              <span 
                className={`text-xs mt-1 ${pathname === '/communities' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                Communities
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/profile"
              className="flex flex-col items-center justify-center no-underline"
            >
              <User 
                size={24} 
                className={pathname === '/profile' ? 'text-blue-500' : 'text-gray-500'}
              />
              <span 
                className={`text-xs mt-1 ${pathname === '/profile' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                Profile
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}