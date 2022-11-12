import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Qb2tsiTtCynY3OQNpOFFQpSO8mc5Dxo",
  authDomain: "house-markerplace-app-705b9.firebaseapp.com",
  projectId: "house-markerplace-app-705b9",
  storageBucket: "house-markerplace-app-705b9.appspot.com",
  messagingSenderId: "683637324419",
  appId: "1:683637324419:web:7de5deb16ffbb82ccd79b6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()