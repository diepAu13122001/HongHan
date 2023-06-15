 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
 import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";

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
 const app = initializeApp(firebaseConfig);
 // khai bao database firestore
 const db = getFirestore(app);

 const analytics = getAnalytics(app);

const getData = async (db) => {
    const querySnapshot = await getDocs(collection(db, "tastes"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    return querySnapshot.docs;
 }

 //delete data from collection
 const deleteDataById = async (db, id) => {
    await deleteDoc(doc(db,"tastes", id));
 }


 //create data for a collection
 const createData = async (db,object) => {
    try {
        const docRef = await addDoc(collection(db, "tasts"), {
          Tittle: "di an",
          Amount: 200000,
          Type: "Outcome",
          createdAt: Date.now()  ,
          createdBy:"Han"
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
 }

await getData(db).then(rs => rs)
await createData(db,"1h7PPxJQQr1Kmtenlc5t").then(rs => rs).catch(e => e);