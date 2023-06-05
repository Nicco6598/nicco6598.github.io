// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_vTBnoldWh6TPPQVVVrCgL3K8GliYD40",
  authDomain: "mnportfolio-40c32.firebaseapp.com",
  projectId: "mnportfolio-40c32",
  storageBucket: "mnportfolio-40c32.appspot.com",
  messagingSenderId: "182377927514",
  appId: "1:182377927514:web:dab4c6a514e0c28c49d963",
  measurementId: "G-PMG89SYNB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);