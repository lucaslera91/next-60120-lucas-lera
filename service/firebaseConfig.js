// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-Eox8H7i8jHyPXwLBlmADscvZnLD5yqs",
  authDomain: "next-60120.firebaseapp.com",
  projectId: "next-60120",
  storageBucket: "next-60120.appspot.com",
  messagingSenderId: "693527906809",
  appId: "1:693527906809:web:5a77ae41a88c396db5d528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//const analytics = getAnalytics(app);
//export const auth = getAuth(app);