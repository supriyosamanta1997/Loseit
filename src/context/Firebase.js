
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8y5mwz-6k_lp7gyD9UUW8xbgVD1AzvlI",
  authDomain: "react-loseit-authintication.firebaseapp.com",
  projectId: "react-loseit-authintication",
  storageBucket: "react-loseit-authintication.appspot.com",
  messagingSenderId: "247250782269",
  appId: "1:247250782269:web:978226eb9ab9e502668254",
  measurementId: "G-MEVTK0TZDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
