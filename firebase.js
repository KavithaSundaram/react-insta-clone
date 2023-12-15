import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDJQD7Q6ikPP_7lB_N3PrE43Plt35WjIwo",
  authDomain: "instagram-clone-c17de.firebaseapp.com",
  projectId: "instagram-clone-c17de",
  storageBucket: "instagram-clone-c17de.appspot.com",
  messagingSenderId: "206124595816",
  appId: "1:206124595816:web:3ee531a14df8e460a9d9dd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
