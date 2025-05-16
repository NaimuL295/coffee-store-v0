// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IfGhoufHpUtqZxFiBmoUoU6Cww0an88",
  authDomain: "coffee-store-fb08d.firebaseapp.com",
  projectId: "coffee-store-fb08d",
  storageBucket: "coffee-store-fb08d.firebasestorage.app",
  messagingSenderId: "373180946076",
  appId: "1:373180946076:web:817da63eeb56cacdc73f59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app)