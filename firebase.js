// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTnPHOu7OzX5Xbg_0lTX6SW-bjZKaWy0Y",
  authDomain: "newsletter-f5bb2.firebaseapp.com",
  projectId: "newsletter-f5bb2",
  storageBucket: "newsletter-f5bb2.appspot.com",
  messagingSenderId: "744857717277",
  appId: "1:744857717277:web:fbc9d92d0c621c08db94f4",
  measurementId: "G-TQSVNC28Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);