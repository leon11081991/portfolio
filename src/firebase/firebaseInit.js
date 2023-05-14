// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { serverTimestamp } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnVJ1h16rdyPILyf9a5t40lkiXCgff6dQ",
  authDomain: "leon-s-portfolio-8ebf6.firebaseapp.com",
  projectId: "leon-s-portfolio-8ebf6",
  storageBucket: "leon-s-portfolio-8ebf6.appspot.com",
  messagingSenderId: "693938429578",
  appId: "1:693938429578:web:93788d1b1e2a578f669773",
  measurementId: "G-X9ELSWM8BB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);
// Initialize an instance of Cloud Functions
const functions = getFunctions(firebaseApp);

// Timestamp
const timestamp = serverTimestamp();

export { auth, db, timestamp, functions };
