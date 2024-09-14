// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-fedad.firebaseapp.com",
  projectId: "mern-real-estate-fedad",
  storageBucket: "mern-real-estate-fedad.appspot.com",
  messagingSenderId: "636029169424",
  appId: "1:636029169424:web:1dc0b3af38d296c63dff95",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
