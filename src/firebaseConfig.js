import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCKcldAEZTYBhL7ne-Oo4xGUCrkpLiZPzA",
  authDomain: "prodo-cc27b.firebaseapp.com",
  projectId: "prodo-cc27b",
  storageBucket: "prodo-cc27b.appspot.com",
  messagingSenderId: "99307923792",
  appId: "1:99307923792:web:9e9976bae4bd0cc99a6455",
  measurementId: "G-9ZF7EMNTQC",
  databaseURL: "https://prodo-cc27b-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);