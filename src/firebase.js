import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHeKv5NRyL5qlizRCYkhdzswGuvbsmVQU",
  authDomain: "components-93c13.firebaseapp.com",
  projectId: "components-93c13",
  storageBucket: "components-93c13.appspot.com",
  messagingSenderId: "154892346667",
  appId: "1:154892346667:web:582355e9cb02a3f806d16e"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);