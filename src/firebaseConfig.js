// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkOgS6BvUWpjdBAUVR6hlJk_oXg1hX9Tc",
  authDomain: "linkedinapp-3f128.firebaseapp.com",
  projectId: "linkedinapp-3f128",
  storageBucket: "linkedinapp-3f128.appspot.com",
  messagingSenderId: "225504107021",
  appId: "1:225504107021:web:940ab990a94498684b1344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth,app}