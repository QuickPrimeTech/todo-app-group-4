// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxddTq_ucYDLYmao8wqpZyMQIhrSHki-E",
  authDomain: "crud-app-145ad.firebaseapp.com",
  projectId: "crud-app-145ad",
  storageBucket: "crud-app-145ad.firebasestorage.app",
  messagingSenderId: "733404592076",
  appId: "1:733404592076:web:ce0cc9b721cb93e33e8f69",
  measurementId: "G-VWWVNG0ZP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
