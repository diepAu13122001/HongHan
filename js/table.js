 // Import the functions you need from the SDKs you need
 import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { db } from "./initApp.js";

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
