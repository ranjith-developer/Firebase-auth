import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAF8oJz4_KrmWMtp4k25S0Ms8Q3Nke7zro",
    authDomain: "basic--auth.firebaseapp.com",
    projectId: "basic--auth",
    storageBucket: "basic--auth.appspot.com",
    messagingSenderId: "335147253371",
    appId: "1:335147253371:web:f2ea18d4c69ff160972cde"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export default app
  // export const provider = new GoogleAuthProvider()