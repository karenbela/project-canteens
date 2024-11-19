// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATD_-lCKBalG90nQmWFOgPigvOsvI74sQ",
  authDomain: "canteens-b0141.firebaseapp.com",
  databaseURL: "https://canteens-b0141-default-rtdb.firebaseio.com",
  projectId: "canteens-b0141",
  storageBucket: "canteens-b0141.firebasestorage.app",
  messagingSenderId: "134870043822",
  appId: "1:134870043822:web:f92d385f089bad583ab13f",
  measurementId: "G-5H1RYRQZBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Mendapatkan referensi database

export { db, ref, onValue };