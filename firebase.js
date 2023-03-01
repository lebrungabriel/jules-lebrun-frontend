import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEVjgKLDQibFrcnfCD6e0C7OkvMYI2PI4",
  authDomain: "jules-lebrun.firebaseapp.com",
  projectId: "jules-lebrun",
  storageBucket: "jules-lebrun.appspot.com",
  messagingSenderId: "946844170775",
  appId: "1:946844170775:web:e45639c1d351e0feee3a52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
