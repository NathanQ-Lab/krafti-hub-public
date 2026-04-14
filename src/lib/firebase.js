import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhpJck1GJcnvywf-2Dja1F822Wdd56CTc",
  authDomain: "kraftihub.firebaseapp.com",
  projectId: "kraftihub",
  storageBucket: "kraftihub.firebasestorage.app",
  messagingSenderId: "850502804963",
  appId: "1:850502804963:web:e33ca92b2c4c738874acd6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);