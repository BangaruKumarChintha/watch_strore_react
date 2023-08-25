import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRehg4gGSwUisd74N8qIVtKb94-OLnxXM",
  authDomain: "authentication-57f5c.firebaseapp.com",
  projectId: "authentication-57f5c",
  storageBucket: "authentication-57f5c.appspot.com",
  messagingSenderId: "135353916922",
  appId: "1:135353916922:web:4d8b7c284300d46c48d843"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Use these for db & auth;
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {auth,db};