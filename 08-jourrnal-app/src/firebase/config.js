// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC86oV4PrSUcdxZAiusRCRXwoAYSm1YTHU',
  authDomain: 'journal-app-fcbce.firebaseapp.com',
  projectId: 'journal-app-fcbce',
  storageBucket: 'journal-app-fcbce.appspot.com',
  messagingSenderId: '812262761335',
  appId: '1:812262761335:web:ba82828b43afd73923b772',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
