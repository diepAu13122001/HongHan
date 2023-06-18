// Import the functions you need from the SDKs you need
import { collection, getDocs, addDoc, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { db } from "./initApp.js";

// khai bao du lieu
const income = document.getElementById("income-data");
const outcome = document.getElementById("outcome-data");
const saving = document.getElementById("saving-data");



// lay du lieu va loc du lieu theo loai
const getData = async (db, type) => {
  // loc theo type
  const q = query(collection(db, "tasts"), where("Type", "==", type));
  console.log(await getDocs(collection(db, "tasts")));
  const querySnapshot = await getDocs(q);
  let rows = ``;
  querySnapshot.forEach((doc) => {
    rows += `<tr>
      <th scope="row">${doc.data().createdAt}</th>
      <td>${doc.data().createdBy}</td>
      <td>${doc.data().Tittle}</td>
      <td>${doc.data().Amount}</td>
      <td>${doc.data().Type}</td>

    </tr>`
  });
  return rows;
}
// neu co thi hien thi du lieu vua load duoc ra man hinh
if(income)income.innerHTML = await getData(db, "Income");
if(outcome) outcome.innerHTML = await getData(db, "Outcome");
if(saving) saving.innerHTML = await getData(db, "Saving");


//delete data from collection
const removeItem = async (id) => {
  await deleteDoc(doc(db, "tasts", id));
  location.reload();
}


//create data for a collection
const createData = async (db, object) => {
  try {
    const docRef = await addDoc(collection(db, "tasts"), {
      Tittle: "di an",
      Amount: 200000,
      Type: "Outcome",
      createdAt: "12/12/2001",
      createdBy: "Han"
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




