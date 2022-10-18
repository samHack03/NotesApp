import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDP3LyvZHWB_3f3SIyreA0NvzVQzY0x9rU",
  authDomain: "notesapp-aeed5.firebaseapp.com",
  projectId: "notesapp-aeed5",
  storageBucket: "notesapp-aeed5.appspot.com",
  messagingSenderId: "1091047774196",
  appId: "1:1091047774196:web:b7855b749ebe11e69b4ba1",
  measurementId: "G-9Y134Y6FC1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };
