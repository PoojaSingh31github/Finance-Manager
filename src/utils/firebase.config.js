// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABVKrvTLbniWKd-EHIDan9pakOBekQ7f4",
  authDomain: "eval-02-12-24.firebaseapp.com",
  databaseURL: "https://eval-02-12-24-default-rtdb.firebaseio.com",
  projectId: "eval-02-12-24",
  storageBucket: "eval-02-12-24.firebasestorage.app",
  messagingSenderId: "272253863255",
  appId: "1:272253863255:web:b0a14387b81e3335b26a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database } 