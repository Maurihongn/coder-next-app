// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCppBFJRQ0cS2k-zAnrxlxzFtGMYPUl9CU',
  authDomain: 'ecommercecoderhouse-1b691.firebaseapp.com',
  projectId: 'ecommercecoderhouse-1b691',
  storageBucket: 'ecommercecoderhouse-1b691.appspot.com',
  messagingSenderId: '8291502807',
  appId: '1:8291502807:web:3a5148f0009ac47a737e92',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
