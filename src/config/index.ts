// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR6T0VsRDZc-ppxYLXHuJxXMExR5B03sQ",
  authDomain: "greenshop-a0901.firebaseapp.com",
  projectId: "greenshop-a0901",
  storageBucket: "greenshop-a0901.appspot.com",
  messagingSenderId: "241333027471",
  appId: "1:241333027471:web:582cf1befcebe879d226fa",
  measurementId: "G-5GXG6KBHVH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export { signInWithGoogle };
