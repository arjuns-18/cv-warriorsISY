/****************************************************
 * 1) IMPORT FIREBASE & FIRESTORE
 ****************************************************/
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getDatabase, ref, set, get, update, remove } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";


/****************************************************
 * 2) FIREBASE CONFIG
 ****************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyC2hrB_4KJIhbNf6CS2UCAn7KR_Mljl3_8",
  authDomain: "fauna-app-40916.firebaseapp.com",
  projectId: "fauna-app-40916",
  storageBucket: "fauna-app-40916.firebasestorage.app",
  messagingSenderId: "34445525546",
  appId: "1:34445525546:web:71db373cf2b089bc33f953",
  measurementId: "G-HE21MMSYJK"
};

/****************************************************
 * 3) INITIALIZE FIREBASE
 ****************************************************/
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);



var usernameInput = document.querySelector("#usertb");
var emailInput = document.querySelector("#emailtb");
var passwordInput = document.querySelector("#passtb");
var login = document.querySelector("#login");
var signup = document.querySelector("#signup")

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