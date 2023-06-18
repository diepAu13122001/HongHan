import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB2TVKSCgO8kPCWt8Js2XfND5JoQyyDBo",
  authDomain: "jsi-spck.firebaseapp.com",
  databaseURL: "https://jsi-spck-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi-spck",
  storageBucket: "jsi-spck.appspot.com",
  messagingSenderId: "856014602523",
  appId: "1:856014602523:web:5fbc0031b5ab5b5ddcd3be",
  measurementId: "G-HGNWFCKQHW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// khai bao database firestore
export const db = getFirestore(app);
