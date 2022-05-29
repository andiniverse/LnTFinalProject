// Import the functions you need from the SDKs you need
import "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvF6moj8DovSSX9DL1wKBbgQ3Lq_gBYgU",
  authDomain: "moonfest-9d3b7.firebaseapp.com",
  projectId: "moonfest-9d3b7",
  storageBucket: "moonfest-9d3b7.appspot.com",
  messagingSenderId: "224532082848",
  appId: "1:224532082848:web:e7420ab64e21fa978b59c5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const name_el = document.getElementById("name");
const email_el = document.getElementById("email");
const phone_el = document.getElementById("phone");
const type_el = document.getElementById("type");
var form_el = document.getElementById("signup");

form_el.addEventListener("submit", function (e) {
  e.preventDefault();
  db.collection("registration")
    .add({
      name: name_el.value,
      email: email_el.value,
      phone: phone_el.value,
      even_type: type_el.value,
    })
    .then((docRef) => {
      (name_el.value = ""),
        (email_el.value = ""),
        (phone_el.value = ""),
        tata.success("Success!", "Data berhasil disimpan");
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      tata.error("Error!", "Data gagal disimpan");
      console.error("Error adding document: ", error);
    });
});
