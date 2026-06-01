import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV62_YdUzZJxWMu8XsCiqsgskhQaYHgkk",
  authDomain: "safari-limo.firebaseapp.com",
  projectId: "safari-limo",
  storageBucket: "safari-limo.firebasestorage.app",
  messagingSenderId: "286149330938",
  appId: "1:286149330938:web:e1576db7cf5d7500530643",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
