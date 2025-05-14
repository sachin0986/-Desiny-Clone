import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCL0ZOj3_oQiopSBDjdIAcng1YxHVZW4k0",
  authDomain: "desinyplus-clone-1c288.firebaseapp.com",
  projectId: "desinyplus-clone-1c288",
  storageBucket: "desinyplus-clone-1c288.appspot.com", // Fixed here
  messagingSenderId: "259065554624",
  appId: "1:259065554624:web:ad48d171a563de13b22f25",
  measurementId: "G-3G3QTV01PG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;