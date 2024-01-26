import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh4JmUuqhhfvg8uEr5vTLWfkS9aCXtLr8",
  authDomain: "ourolink-website-portfolio.firebaseapp.com",
  projectId: "ourolink-website-portfolio",
  storageBucket: "ourolink-website-portfolio.appspot.com",
  messagingSenderId: "736338334851",
  appId: "1:736338334851:web:ce7db1737ce64274d6b7b6",
  measurementId: "G-PMGC3015FB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

// Utils
export const firestore = getFirestore(firebaseApp);
