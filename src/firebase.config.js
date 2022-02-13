import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBhvesgU9XcxMLKg_esDrPNMYf6fQJ1LUs",
  authDomain: "house-marketplace-app-7eb2b.firebaseapp.com",
  projectId: "house-marketplace-app-7eb2b",
  storageBucket: "house-marketplace-app-7eb2b.appspot.com",
  messagingSenderId: "967035063080",
  appId: "1:967035063080:web:2dc5d781897cc5a9e39e1d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()