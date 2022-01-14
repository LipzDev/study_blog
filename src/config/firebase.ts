import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWDJiA0xb0IYuDQH0XaDJzO2znvseRixE",
  authDomain: "blog-47a62.firebaseapp.com",
  projectId: "blog-47a62",
  storageBucket: "blog-47a62.appspot.com",
  messagingSenderId: "464616850298",
  appId: "1:464616850298:web:f624ac0656bbfa32f3ccc3",
  measurementId: "G-46WHKXN3GT",
};

// Initialize Firebase

export default initializeApp(firebaseConfig);
export const auth = getAuth();
export const signIn = signInWithEmailAndPassword;
