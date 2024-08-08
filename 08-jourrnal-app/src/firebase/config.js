// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '@/helpers/getEnvironments';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const env = getEnvironments();

//! Prod config
// const firebaseConfig = {
//   apiKey: 'AIzaSyC86oV4PrSUcdxZAiusRCRXwoAYSm1YTHU',
//   authDomain: 'journal-app-fcbce.firebaseapp.com',
//   projectId: 'journal-app-fcbce',
//   storageBucket: 'journal-app-fcbce.appspot.com',
//   messagingSenderId: '812262761335',
//   appId: '1:812262761335:web:ba82828b43afd73923b772',
// };

//? Testing configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCEQ6QPNJsn65qSc1VcjSU_37IW29rfcxA',
//   authDomain: 'zustand-storage-36683.firebaseapp.com',
//   databaseURL: 'https://zustand-storage-36683-default-rtdb.firebaseio.com',
//   projectId: 'zustand-storage-36683',
//   storageBucket: 'zustand-storage-36683.appspot.com',
//   messagingSenderId: '425789153392',
//   appId: '1:425789153392:web:887ef812b59555df9a14b5',
// };

const firebaseConfig = {
  apiKey: env.VITE_APIKEY,
  authDomain: env.VITE_AUTHDOMAIN,
  databaseURL: env.VITE_DATABASEURL,
  projectId: env.VITE_PROJECTID,
  storageBucket: env.VITE_STORAGEBUCKET,
  messagingSenderId: env.VITE_MESSAGINGSENDERID,
  appId: env.VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
