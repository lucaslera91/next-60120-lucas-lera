
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC-Eox8H7i8jHyPXwLBlmADscvZnLD5yqs",
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "next-60120",
  storageBucket: "next-60120.appspot.com",
  messagingSenderId: "693527906809",
  appId: "1:693527906809:web:5a77ae41a88c396db5d528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);
export const auth = getAuth(app);