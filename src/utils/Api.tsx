// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrXrfejKBW2t1V_WO18S7H0TV9DXb6jQg",
  authDomain: "knot-store.firebaseapp.com",
  projectId: "knot-store",
  storageBucket: "knot-store.appspot.com",
  messagingSenderId: "849967450516",
  appId: "1:849967450516:web:b1663bd3f53686b349e781",
  measurementId: "G-H826L431WY"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const db = getFirestore(app);


export default db