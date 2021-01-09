import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBMEireQCkhIP4cGPLBbWqWt5afT_4Kpjg",
    authDomain: "bigword-c6c17.firebaseapp.com",
    projectId: "bigword-c6c17",
    storageBucket: "bigword-c6c17.appspot.com",
    messagingSenderId: "1008053164131",
    appId: "1:1008053164131:web:b14344bd19f91ccab20056",
    measurementId: "G-VSJLRCE8L8"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const auth = fb.auth();
  export const db = fb.firestore();

  firebase.analytics();