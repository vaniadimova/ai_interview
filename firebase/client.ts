import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXDzCzhluguQIcDUyV8opGhle5W91c2i8",
  authDomain: "prepinterview-f3cea.firebaseapp.com",
  projectId: "prepinterview-f3cea",
  storageBucket: "prepinterview-f3cea.firebasestorage.app",
  messagingSenderId: "856137885036",
  appId: "1:856137885036:web:32d58bad4298ca17907f49",
  measurementId: "G-VHL6C775SV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
