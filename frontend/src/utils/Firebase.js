// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { IoMagnet } from "react-icons/io5";
import{getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginonecart-46066.firebaseapp.com",
  projectId: "loginonecart-46066",
  storageBucket: "loginonecart-46066.firebasestorage.app",
  messagingSenderId: "728763456881",
  appId: "1:728763456881:web:5656083d1c527618c06ad0"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}