// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdaB8hM5LTfjZEn5nLEQ6-3qZzZ9KHCt0",
  authDomain: "react-cursos-eb7ee.firebaseapp.com",
  projectId: "react-cursos-eb7ee",
  storageBucket: "react-cursos-eb7ee.appspot.com",
  messagingSenderId: "670767267470",
  appId: "1:670767267470:web:635c308573c5e7a8c893df"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)