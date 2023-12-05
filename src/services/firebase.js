// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAClCPWUqU0IAIWlVSoBzdewldAFydww9g",
  authDomain: "tradetreasure-f2d6f.firebaseapp.com",
  projectId: "tradetreasure-f2d6f",
  storageBucket: "tradetreasure-f2d6f.appspot.com",
  messagingSenderId: "151924802776",
  appId: "1:151924802776:web:08cbb5dda61050315e43ad",
  measurementId: "G-NG5FS75ZDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);