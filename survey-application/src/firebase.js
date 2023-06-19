// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApYv0_m1__Bl7QxrHKw0n0UIr6j1afobc",
  authDomain: "survey-application-dcf74.firebaseapp.com",
  projectId: "survey-application-dcf74",
  storageBucket: "survey-application-dcf74.appspot.com",
  messagingSenderId: "625842426672",
  appId: "1:625842426672:web:cfc3644d1fdc7e94062ef5",
  measurementId: "G-RX3176RD1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);