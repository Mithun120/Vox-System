import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmj5ug1XodIwU19KVniAoAZjeb7DwWt6M",
  authDomain: "library-48c7f.firebaseapp.com",
  projectId: "library-48c7f",
  storageBucket: "library-48c7f.appspot.com",
  messagingSenderId: "985706304851",
  appId: "1:985706304851:web:358a028ea079d5b7943da6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider=new GoogleAuthProvider();
