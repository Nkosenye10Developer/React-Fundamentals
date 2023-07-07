// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApDDWnNyW8OoDIOedVZGuCR5QRcsmhpT4",
  authDomain: "react-course-d3577.firebaseapp.com",
  projectId: "react-course-d3577",
  storageBucket: "react-course-d3577.appspot.com",
  messagingSenderId: "65435747216",
  appId: "1:65435747216:web:74fb46f0c88f82b3df6915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)