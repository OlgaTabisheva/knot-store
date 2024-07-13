import { collection, getDocs } from 'firebase/firestore';
import  db  from '../firebase-config/firebase';

export const querySnapshot = await getDocs(collection(db, "Goods"));


