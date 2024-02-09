import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAS5n6D_HwAVlCWMkWzjXoyPQp3BTIKFJk",
  authDomain: "comicshop-99566.firebaseapp.com",
  projectId: "comicshop-99566",
  storageBucket: "comicshop-99566.appspot.com",
  messagingSenderId: "99096099411",
  appId: "1:99096099411:web:ae26bb06b3a2ab52a264a6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)