
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCEknDhXyj_0xcqzGR-Y-QhHxDxXNnltvg",
  authDomain: "login-119b5.firebaseapp.com",
  projectId: "login-119b5",
  storageBucket: "login-119b5.appspot.com",
  messagingSenderId: "386821335314",
  appId: "1:386821335314:web:868398c43bd695ae4d6bcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};