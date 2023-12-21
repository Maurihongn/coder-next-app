"use client";

import { auth, googleProvider } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState, createContext, useContext, useEffect } from "react";
import { toast } from "sonner";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
    role: null,
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const loginUser = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };
  const logoutUser = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
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
