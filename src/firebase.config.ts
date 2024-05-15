import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'techbite-94c70.firebaseapp.com',
  projectId: 'techbite-94c70',
  storageBucket: 'techbite-94c70.appspot.com',
  messagingSenderId: '1001547555752',
  appId: '1:1001547555752:web:7f712c06f0145255f3f39d',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
