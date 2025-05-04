import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSR1BReWPjjKvmkRnb2ULcJkDtOJnRSQ",
  authDomain: "news-paper-website-682c2.firebaseapp.com",
  projectId: "news-paper-website-682c2",
  storageBucket: "news-paper-website-682c2.firebasestorage.app",
  messagingSenderId: "346250204693",
  appId: "1:346250204693:web:b16551fe04ceb67617a01c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
