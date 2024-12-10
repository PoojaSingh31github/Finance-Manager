// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChjNedXZ9yVxuV7bPGIiwakDca1ZUnJrE",
  authDomain: "finance-manegement-94f4b.firebaseapp.com",
  projectId: "finance-manegement-94f4b",
  storageBucket: "finance-manegement-94f4b.firebasestorage.app",
  messagingSenderId: "957414423540",
  appId: "1:957414423540:web:9994f5e03fe719734b57a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database } 