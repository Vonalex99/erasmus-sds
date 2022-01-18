import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const Database = initializeApp({  
  apiKey: "AIzaSyCcTC0A2npdsGwpgbrt6rgqOjge2z4zY0A",
  authDomain: "sds2-erasmus.firebaseapp.com",
  databaseURL: "https://sds2-erasmus-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sds2-erasmus",
  storageBucket: "sds2-erasmus.appspot.com",
  messagingSenderId: "203451554480",
  appId: "1:203451554480:web:8f56e3cff3f243ee4db975",
  measurementId: "G-1PM1TNEPXL"
});

const db = getDatabase(Database)

export default db

export const auth = getAuth(Database);
