/****************************************************
 * 1) IMPORT FIREBASE & FIRESTORE
 ****************************************************/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

/****************************************************
 * 2) FIREBASE CONFIG
 ****************************************************/
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2hrB_4KJIhbNf6CS2UCAn7KR_Mljl3_8",
  authDomain: "fauna-app-40916.firebaseapp.com",
  databaseURL: "https://fauna-app-40916-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fauna-app-40916",
  storageBucket: "fauna-app-40916.firebasestorage.app",
  messagingSenderId: "34445525546",
  appId: "1:34445525546:web:71db373cf2b089bc33f953",
  measurementId: "G-HE21MMSYJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

var usernameInput = document.querySelector("#usertb");
var emailInput = document.querySelector("#emailtb");
var passwordInput = document.querySelector("#passtb");
var login = document.querySelector("#login");
var signup = document.querySelector("#signup")

import { doc, setDoc } from "firebase/firestore"; 

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});

function loginf() {
    set(ref(db, "Logininfo/" + usernameInput.value), {
      Email: emailInput.value,
      Username: usernameInput.value,
      Password: passwordInput.value,
    })
    .then (()=>{
        alert("Data Stored")
    })
    .catch((error) => {      
      alert("Error: " + error.message);
  });
}

function signup() {

}

login.addEventListener('click', loginf);
signup.addEventListener('click', signup);