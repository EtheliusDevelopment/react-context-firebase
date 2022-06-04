import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1ZMiV9v96pTa98A-j39Ap3mJ0jKyWnWw",
  authDomain: "bluuweb-b3c6b.firebaseapp.com",
  projectId: "bluuweb-b3c6b",
  storageBucket: "bluuweb-b3c6b.appspot.com",
  messagingSenderId: "863357289969",
  appId: "1:863357289969:web:4f2e1fb44d01147f327050",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
