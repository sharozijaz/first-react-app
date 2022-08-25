// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCiOlwaVcLkiE8f_x8u3ay2C0BPSPgD2I",
  authDomain: "lofi-college.firebaseapp.com",
  projectId: "lofi-college",
  storageBucket: "lofi-college.appspot.com",
  messagingSenderId: "494567743435",
  appId: "1:494567743435:web:331cf0dd9686053584604e",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
