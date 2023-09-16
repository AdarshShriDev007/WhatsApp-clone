import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    doc
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDynlwoC91iM1fqEzJ2BteSqfr3Ut64tCE",
  authDomain: "whatsapp-clone-ffbdc.firebaseapp.com",
  projectId: "whatsapp-clone-ffbdc",
  storageBucket: "whatsapp-clone-ffbdc.appspot.com",
  messagingSenderId: "125088708461",
  appId: "1:125088708461:web:a3f04277bd76c0a2e74c64"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
    db,
    collection,
    query,
    orderBy,
    onSnapshot,
    addDoc,
    doc,
    auth,
    signInWithPopup,
    provider,
    onAuthStateChanged,
    signOut
}