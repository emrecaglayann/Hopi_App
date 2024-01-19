// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1RfqAkb_16kMRbnYz7sNsFvasr3Mdpuc",
  authDomain: "hopi-eccf4.firebaseapp.com",
  projectId: "hopi-eccf4",
  storageBucket: "hopi-eccf4.appspot.com",
  messagingSenderId: "1026084862241",
  appId: "1:1026084862241:web:928075e5a46a5525f4a660",
  measurementId: "G-YPB88PGZND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);