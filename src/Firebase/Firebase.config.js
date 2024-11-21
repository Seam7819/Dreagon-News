// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU6_8qn-NSDkojuqurOlDxzMxI1vQ7TRI",
  authDomain: "agon-news-auth.firebaseapp.com",
  projectId: "agon-news-auth",
  storageBucket: "agon-news-auth.firebasestorage.app",
  messagingSenderId: "888781151705",
  appId: "1:888781151705:web:f44c96e1eb50330b2f0dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;