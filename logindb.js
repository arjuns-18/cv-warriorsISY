// Import the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2hrB_4KJIhbNf6CS2UCAn7KR_Mljl3_8",
  authDomain: "fauna-app-40916.firebaseapp.com",
  projectId: "fauna-app-40916",
  storageBucket: "fauna-app-40916.firebasestorage.app",
  messagingSenderId: "34445525546",
  appId: "1:34445525546:web:71db373cf2b089bc33f953",
  measurementId: "G-HE21MMSYJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export the initialized Firebase services
export { app, auth, db };
