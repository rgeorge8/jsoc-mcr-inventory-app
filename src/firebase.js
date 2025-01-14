// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgKHWK1ow3hZRmEq4CRCBcwJjggx1d388",
    authDomain: "jsoc-mcr-inventory-app.firebaseapp.com",
    projectId: "jsoc-mcr-inventory-app",
    storageBucket: "jsoc-mcr-inventory-app.firebasestorage.app",
    messagingSenderId: "806481657376",
    appId: "1:806481657376:web:0ad74b353c5f5f1ed68645"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore reference
export const db = getFirestore(app);
export default app;
