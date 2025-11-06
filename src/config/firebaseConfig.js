// src/config/firebaseConfig.js

// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXghrr3ORDBParyAmHXLckmYxdrRDAVAI",
  authDomain: "ebill-3a434.firebaseapp.com",
  projectId: "ebill-3a434",
  storageBucket: "ebill-3a434.firebasestorage.app",
  messagingSenderId: "680611220311",
  appId: "1:680611220311:web:0bd47fb6e0081e83bb4c12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore Database
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
