import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCI6-ifAuoBeeQMGt8CZRZnkcQAoGOmRCs",
  authDomain: "readinglistapp-8975f.firebaseapp.com",
  projectId: "readinglistapp-8975f",
  storageBucket: "readinglistapp-8975f.appspot.com",
  messagingSenderId: "313331303880",
  appId: "1:313331303880:web:a5b7c7b72810c10c102cfd",
};

//init firebase
initializeApp(firebaseConfig);

//init firestore
const db = getFirestore()

export { db }