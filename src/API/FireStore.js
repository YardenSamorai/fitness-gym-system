import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyAGt6h1NH0rDFOWJfrNNVENShb_aGarXQM",
  authDomain: "fitness-system.firebaseapp.com",
  projectId: "fitness-system",
  storageBucket: "fitness-system.appspot.com",
  messagingSenderId: "801368650242",
  appId: "1:801368650242:web:9f55fc2a181f158be8ed1b",
  measurementId: "G-Y26ZKDLS2E"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebase.initializeApp(firebaseConfig));
export default firebase;