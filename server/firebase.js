// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMj0VVkOx3KA-TyyBygOt1BWYrnlJ6PJI",
  authDomain: "tradez-electric.firebaseapp.com",
  projectId: "tradez-electric",
  storageBucket: "tradez-electric.appspot.com",
  messagingSenderId: "811197846204",
  appId: "1:811197846204:web:9da5e7a5611fbaa2fa36b9",
  measurementId: "G-JRNS9VSQM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);