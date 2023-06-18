import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-lite.js";
import { db } from "./initApp.js";

// lấy danh sách các trường dữ liệu
const tittle = document.getElementById("Tittle").value;
const type = document.getElementById("Type").value;
const amount = document.getElementById("Amount").value;
const createdBy = document.getElementById("createdBy").value;
const createdAt = document.getElementById("date").value;

const btnCreate = document.getElementById("create");

const create = async (db) => {
    // // kiểm tra nếu có trơờng trống thì phải báo lỗi 
    // if (tittle == "" || tittle == undefined) {
    //     alert("Please fill form");
    //     return; // thoat ra khoi function de khong lam tiep code
    // }
    // if (type == "" || type == undefined) {
    //     alert("Please fill form");
    //     return; // thoat ra khoi function de khong lam tiep code
    // }
    // if (amount == "" || amount == undefined) {
    //     alert("Please fill form");
    //     return; // thoat ra khoi function de khong lam tiep code
    // }
    // if (createdBy == "" || createdBy == undefined) {
    //     alert("Please fill form");
    //     return; // thoat ra khoi function de khong lam tiep code
    // }
    // if (createdAt == "" || createdAt == undefined) {
    //     alert("Please fill form");
    //     return; // thoat ra khoi function de khong lam tiep code
    // }

    //tạo dữ liệu
    try {
        const docRef = await addDoc(collection(db, "tasts"), {
            Tittle: tittle,
            Amount: amount,
            Type: type,
            createdAt: createdAt,
            createdBy: createdBy
        });

        alert("Created data");
        console.log(docRef.id)
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

btnCreate.addEventListener("click", async () => {
    await create(db);
})