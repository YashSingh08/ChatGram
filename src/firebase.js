// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEUzs3u20-Qoo73ncafKzGiu4Ju5Aiwkk",
  authDomain: "chatgram-ba3a9.firebaseapp.com",
  projectId: "chatgram-ba3a9",
  storageBucket: "chatgram-ba3a9.appspot.com",
  messagingSenderId: "1029429722211",
  appId: "1:1029429722211:web:412c58610e1fa32ac48c56",
  measurementId: "G-63WDCE2BQV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;