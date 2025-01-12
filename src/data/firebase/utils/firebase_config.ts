import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh4JmUuqdahhf32424vg8uEr5vTLWfkS9aCXtLr8",
  authDomain: "ourolink-web234site-portfolio.firebaseapp.com",
  projectId: "ourolink-42cb9",
  storageBucket: "ourolink-website-portfolio.appspot.com",
  messagingSenderId: "dsfs32423df",
  appId: "1:736338331248512342:web:ce7db1737ce64274d6b7b6",
  measurementId: "G-PMGC332423015FB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

// Utils
export const firestore = getFirestore(firebaseApp);
