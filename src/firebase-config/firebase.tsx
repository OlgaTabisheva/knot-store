import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
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
//export const analytics = getAnalytics(app);

const db = getFirestore(app);


export default db




