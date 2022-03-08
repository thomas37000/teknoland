import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//auth from firebase
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//database from firebase
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectStorage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
const Auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(Auth, googleProvider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profileImage = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profileImage", profileImage);
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { projectStorage, Auth, firebaseApp, db, signInWithGoogle };
