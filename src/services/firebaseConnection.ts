
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCzUbiNIWeAsDR3sA0Cn8xSDObB1XCeqgE",
  authDomain: "curso-185b0.firebaseapp.com",
  projectId: "curso-185b0",
  storageBucket: "curso-185b0.firebasestorage.app",
  messagingSenderId: "258415998000",
  appId: "1:258415998000:web:6af20b9962aed335dd29f5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };