// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg1hdRQDzZnN6dAhQ1wwYpO_dJ5RaOrvM",
  authDomain: "todo-firebase-76ba9.firebaseapp.com",
  projectId: "todo-firebase-76ba9",
  storageBucket: "todo-firebase-76ba9.appspot.com",
  messagingSenderId: "342383006586",
  appId: "1:342383006586:web:842e0a46cc2c528c5bfcc3",
  measurementId: "G-D02ZMZ47TR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export let analytics: any
// Initialize Firebase Analytics if in the browser
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}