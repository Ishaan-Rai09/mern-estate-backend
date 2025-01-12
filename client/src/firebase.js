// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-54262.firebaseapp.com",
  projectId: "mern-estate-54262",
  storageBucket: "mern-estate-54262.firebasestorage.app",
  messagingSenderId: "930540840234",
  appId: "1:930540840234:web:5a4ad8dc6f5efb833e6a53",
  measurementId: "G-SW0XVRWBJT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);