// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ3AEHfx9w5wWCNf75GJA9WRWltYAr34o",
  authDomain: "netflixgpt-sb9599.firebaseapp.com",
  projectId: "netflixgpt-sb9599",
  storageBucket: "netflixgpt-sb9599.appspot.com",
  messagingSenderId: "130271662474",
  appId: "1:130271662474:web:865f6fdae4e5886deb7873",
  measurementId: "G-KYK7QNWRXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();