'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged  } from 'firebase/auth';
import { auth } from '@/lib/firebase';

// 1. Create context
const AuthContext = createContext();

// 2. Provide context to children
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      // setUser(firebaseUser);
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || 'Anonymous',
          username: firebaseUser.email ? '@' + firebaseUser.email.split('@')[0] : '@user',
          bio: 'This is my bio...', 
          profilePic: firebaseUser.photoURL || '/default-profile.png',
          coverPic: '/cover.jpg',
          followers: 0,
          following: 0,
          posts: 0,
        });

      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
 

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom hook to use context
export function useAuth() {
  return useContext(AuthContext);
}

