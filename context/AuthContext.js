'use client';

import { auth, db, googleProvider } from '@/firebase/config';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useState, createContext, useContext, useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });
  const router = useRouter();

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };
  const logoutUser = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(docRef);

        if (userDoc.data()?.rol === 'ADMIN') {
          setUser({
            logged: true,
            email: user.email,
            uid: user.uid,
          });
        } else {
          router.push('/unauthorized');
          logoutUser();
        }
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, logoutUser, googleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};
